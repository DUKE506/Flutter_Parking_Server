import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { ParkingCars } from './entities/parking_cars.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Car,ParkingCars])],
    controllers : [CarController],
    providers:[CarService],
})
export class CarModule {}
