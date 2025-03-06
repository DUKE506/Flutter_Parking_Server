import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { detailCarData, parkingCarData } from './data';
import { sleep } from './utils/utils';
import { CarCount } from './dto/car-count.dto';
import { ListBase } from 'src/common/entities/list-base.entity';
import { ApiListOkResponseDecorator } from 'src/common/decorator/api-list-ok-response.decorator';
import { CarDetail } from './entities/car_detail.entity';
import { CarRecord } from './dto/car-record.dto';
import { CarType } from './types/types';
import { CarService } from './car.service';

@ApiTags('car')
@Controller('car')
export class CarController {
    constructor(private carService:CarService){}


    @ApiOperation({ summary: '현재 주차차량 카운트' })
    @ApiOkResponse({
        description: '주차차량카운트 조회 성공',
        type: CarCount,
        isArray: true,
    })
    @Get('/dashboard')
    async getCarCounts(): Promise<CarCount[] | null> {
        console.log('[Controller][Car] 주차차량 카운트 조회');
        await sleep(300);
        const data: CarCount[] = Object.values(CarType).map((type) => ({
            carType : type,
            value: type == 'all' ? parkingCarData.length : parkingCarData.filter((e) => e.carType == type).length
        }));

        return data;
    }

    

    @Get('/:type')
    @ApiParam({
        name: 'type',
        description: '차량구분',
        enum: CarType,
    })
    @ApiOperation({ summary: '전체 주차차량 조회값' })
    @ApiListOkResponseDecorator(CarRecord, {
        description: '주차차량 조회 성공',
    })
    async getParkingCarByType(
        @Param('type') carType: CarType
    ): Promise<ListBase<CarRecord>> {
        console.log(`[Controller][Car] 전체 주차차량 조회(파라미터 : ${carType})`);

        //딜레이
        await sleep(300);

        //all인 경우 전체를 반환
        if (carType == 'all') {
            return { data: parkingCarData } as ListBase<CarRecord>;
        }

        //나머지 타입의 경우 해당 데이터만 반환
        const data = parkingCarData.filter((e) => e.carType == carType);

        return { data } as ListBase<CarRecord>;
    }


    @Get('/detail/:id')
    @ApiParam({
        name:'id',
        description : '차량 식별자',
        example : '1',
    })
    @ApiOperation({summary:'주차차량 상세 조회'})
    @ApiOkResponse({
        description : '조회 성공',
        type :CarDetail,
    })
    async getDetailCarById(
        @Param('id') id : string,
    ):Promise<CarDetail | undefined>{
        console.log(`[Controller][Car] 주차차량 상세조회(파라미터 : ${id})`);
        await sleep(300);

        const filterData = detailCarData.find( car => car.id == id);

        return filterData;
    }

    @Post('/parking/add/:type')
    @ApiOperation({ summary: '주차차량 등록' })
    @ApiParam({
        name:'type',
        description : '차량 구분',
        example : 'resident',
    })
    @ApiOkResponse({
        description : '등록 성공',
    })
    async addParkingCar(
        @Param('type') type:CarType
    ){
        console.log(`[Controller][Car] 주차차량 발생(파라미터 : ${type})`);
        //[입주민차량 주차 시]
        //DB에 등록되어있는 차량 중 현재 상태가 OUT인 차량을 뽑아와서 등록

        //[외부차량 주차 시]
        //랜덤 추차 번호 생성하여 기록
        //Car테이블, parking_car테이블 입력
    }
}
