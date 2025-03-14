import { Injectable } from '@nestjs/common';
import { Car } from './entities/car.entity';
import { ParkingHistory } from './entities/parking-history.entity';
import { CarType, ParkingState } from './types/types';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { randomCarModel, randomCarNumber, randomName, randomPhone } from './utils/utils';
import { CarRecord } from './dto/car-record.dto';
import { ListBase } from 'src/common/entities/list-base.entity';
import { CarDetail } from './dto/car-detail.dto';
import { CarCount } from './dto/car-count.dto';
import { AddVisitCar } from './dto/add-visit-car.dto';
import { AddResidentCar } from './dto/add-resident-car.dto';


@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private carRepository: Repository<Car>,

        @InjectRepository(ParkingHistory)
        private parkingHistoryRepository: Repository<ParkingHistory>,

        private dataSource: DataSource,
    ) { }

    private readonly car: Car;
    private readonly parkingHistory: ParkingHistory[] = [];

    /**
     * 대시보드 데이터 조회
     * @returns 
     */
    async findParkingCarCount() {
        const res = await this.carRepository.find({
            where: { state: ParkingState.IN }
        })

        const dto: CarCount[] = [
            ...Object.values(CarType).map((type) => {
                if (type == CarType.ALL) {
                    return {
                        carType: type,
                        value: res.length,
                    }
                }
                else {
                    return {
                        carType: type,
                        value: res.filter((cars) => cars.carType == type).length,
                    }
                }
            })
        ]
        return dto;
    }

    /**
     * 타입별 주차차량 조회
     * @param carType 
     * @returns 
     */
    async findParkedCarsByType(carType: CarType): Promise<ListBase<CarRecord>> {
        var res: ParkingHistory[] = [];
        //전체반환
        if (carType == CarType.ALL) {
            res = await this.parkingHistoryRepository.find();
        } else {
            res = await this.parkingHistoryRepository.find({
                where: {
                    car: { carType: carType }
                },
                relations: { car: true }
            })
        }

        //Dto 형태로 변환
        const datas: ListBase<CarRecord> = {
            data: res.map(data => {
                return {
                    //추후 number값으로 수정할 수 도있음
                    id: data.id.toString(),
                    number: data.car.number,
                    name: data.car.owner,
                    carType: data.car.carType,
                    entryTime: data.entryAt
                }
            })
        };
        

        return datas;
    }

    /**
     * 차량 상세조회
     * @param carNumber 
     * @returns 
     */
    async findCarDetailById(carNumber: string): Promise<CarDetail | null> {
        const res = await this.carRepository.findOne({
            where: { number: carNumber },
            relations: {
                history: true,
            }
        },)

        if (res == null) {
            return null;
        }

        const histories = await res.history;

        const dto: CarDetail = {
            id: res.id.toString(),
            name: res.owner,
            number: res.number,
            modelName: res.modelName,
            address: res.address,
            phone: res.phone,
            carType: res.carType,
            state: res.state,
            history: [...histories.map((history) => {
                return {
                    id: history.id.toString(),
                    time: history.entryAt,
                    state: history.car.state,
                }
            }
            )],
        }

        return dto;
    }

    /**
     * 차량번호조회
     * --
     * @param carNumber 
     * @returns 
     */
    async getCarByCarNumber(carNumber) {
        const res = await this.carRepository.findOne({
            where: { number: carNumber },
            relations: { history: true }
        })


        return res;
    }

    /**
     * 주차이력 조회
     * @param number 
     * @returns 
     */
    async getParkingHistoryByNumber(number:string) {
        const res = await this.parkingHistoryRepository.findOne({
            where:{
                car:{number : number}
            }
        })
        
        return res;
    }

    /**
     * 주차이력(입차) 생성
     * @param carNumber 
     */
    async addParkingCars(car: Car,) {
        const res = await this.parkingHistoryRepository.save({
            entryAt: new Date(),
            car: car
        })

        return res;
    }

    /**
     * 주차차량 추가
     * @param carType 
     */
    async addParkingCar(carType: CarType) {
        //랜덤차량번호
        const carNumber = randomCarNumber();
        //랜덤 이름
        const name = randomName();
        //랜덤 차량 모델
        const modelName = randomCarModel();
        //랜덤 휴대폰 번호
        const phone = randomPhone();
        //입차 차량
        let car = new Car();


        //이전 주차여부
        const hasData = await this.getCarByCarNumber(carNumber);

        //현재 입차 중인 경우 리턴
        if (hasData && hasData.state == ParkingState.IN) {
            return '현재 입차 중';
        }

        //기존 차량 주차(입주, 외부)
        if (hasData) {
            hasData.state = ParkingState.IN;
            car = await this.dataSource.manager.save(hasData)
        }

        //입주차량
        if (carType == CarType.RESIDENT) {
            car.owner = name;
            car.number = carNumber;
            car.modelName = modelName;
            car.carType = carType;
            car.address = '서울특별시 성동구 성수동2가 835(성수롯데캐슬아파트)';
            car.phone = phone;
            car.state = ParkingState.IN;
            //
            await this.dataSource.manager.save(car);
        }

        //외부차량
        if (carType == CarType.OUTSIDE) {
            car.number = carNumber;
            car.carType = carType;
            car.state = ParkingState.IN;

            await this.dataSource.manager.save(car);
        }

        //이력 생성
        const history = new ParkingHistory();
        history.entryAt = new Date();
        history.car = car;

        const res = await this.dataSource.manager.save(history);


        return res;

    }

    /**
     * 방문차량 등록(외부 -> 방문)
     * @param visit 
     */
    async addVisitCar(
        visit: AddVisitCar
    ){
        const res =  await this.carRepository.update(parseInt(visit.id),{
            owner : visit.name,
            phone : visit.phone,
            carType : CarType.VISIT,
        });

        
    }

    /**
     * 입주차량 등록
     * @param visitCar 
     */
    async addResidentCar(
        resident: AddResidentCar
    ){
        const hasHistory = await this.getParkingHistoryByNumber(resident.carNumber);

        //주차장에 있지않은 경우
        if(hasHistory == null){
            await this.carRepository.insert({
                owner : resident.name,
                number : resident.carNumber,
                modelName : resident.modelName,
                phone : resident.phone,
                address : resident.detailAddress,
                carType : CarType.RESIDENT,
                state : ParkingState.OUT,
    
            })
            return true
        }

        await this.carRepository.update(hasHistory.car.id,{
            owner : resident.name,
            modelName : resident.modelName,
            address : resident.detailAddress,
            carType : CarType.RESIDENT
        });




        
    }
}
