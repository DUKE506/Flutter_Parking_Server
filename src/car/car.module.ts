import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { ParkingHistory } from './entities/parking-history.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Car, ParkingHistory])],
    controllers: [CarController],
    providers: [CarService],
})
export class CarModule { }
