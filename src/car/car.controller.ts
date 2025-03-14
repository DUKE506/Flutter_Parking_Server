import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { detailCarData, parkingCarData } from './data';
import { sleep } from './utils/utils';
import { CarCount } from './dto/car-count.dto';
import { ListBase } from 'src/common/entities/list-base.entity';
import { ApiListOkResponseDecorator } from 'src/common/decorator/api-list-ok-response.decorator';

import { CarRecord } from './dto/car-record.dto';
import { CarType } from './types/types';
import { CarService } from './car.service';
import { CarDetail } from './dto/car-detail.dto';
import { AddVisitCar } from './dto/add-visit-car.dto';
import { AddResidentCar } from './dto/add-resident-car.dto';

@ApiTags('car')
@Controller('car')
export class CarController {
    constructor(private carService: CarService) { }


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
            carType: type,
            value: type == 'all' ? parkingCarData.length : parkingCarData.filter((e) => e.carType == type).length
        }));


        return await this.carService.findParkingCarCount();
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
    async getParkedCarByType(
        @Param('type') carType: CarType
    ): Promise<ListBase<CarRecord>> {
        console.log(`[Controller][Car] 전체 주차차량 조회(파라미터 : ${carType})`);

        //딜레이
        // await sleep(300);


        return await this.carService.findParkedCarsByType(carType);
    }


    @Get('/detail/:carNumber')
    @ApiParam({
        name: 'carNumber',
        description: '차량번호',
        example: '08가8445',
    })
    @ApiOperation({ summary: '주차차량 상세 조회' })
    @ApiOkResponse({
        description: '조회 성공',
        type: CarDetail,
    })
    async getDetailCarById(
        @Param('carNumber') carNumber: string,
    ): Promise<CarDetail | null> {
        console.log(`[Controller][Car] 주차차량 상세조회(파라미터 : ${carNumber})`);
        // await sleep(300);

        return await this.carService.findCarDetailById(carNumber);
    }

    @Post('/parking/add/:type')
    @ApiOperation({ summary: '주차차량 등록' })
    @ApiParam({
        name: 'type',
        description: '차량 구분',
        example: 'resident',
    })
    @ApiOkResponse({
        description: '등록 성공',
    })
    async addParkingCar(
        @Param('type') type: CarType
    ) {
        console.log(`[Controller][Car] 입차 발생(파라미터 : ${type})`);

        return await this.carService.addParkingCar(type);
    }

    /**
     * 방문차량 등록
     */
    @Post('/add/visit')
    async addVisitCar(
        @Body() data: AddVisitCar
    ) {
        console.log(`[Controller][Car] 방문차량 등록(파라미터 :`,data,')');
        return await this.carService.addVisitCar(data);
    }

    @Post('/add/resident')
    async addResidentCar(
        @Body() data:AddResidentCar
    ){
        return await this.carService.addResidentCar(data);
    }


}
