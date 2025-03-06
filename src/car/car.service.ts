import { Injectable } from '@nestjs/common';
import { Car } from './entities/car.entity';
import { ParkingCars } from './entities/parking_cars.entity';
import { CarType } from './types/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private carRepository:Repository<Car>
    ){}
    
    private readonly car:Car;
    private readonly parkingCar:ParkingCars[] = [];

    /**
     * 주차차량 추가
     * @param carType 
     */
    addParkingCar(carType:CarType){
        if(carType == CarType.OUTSIDE){

        }
    }
}
