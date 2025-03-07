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
    async getParkedCarByType(
        @Param('type') carType: CarType
    ): Promise<ListBase<CarRecord>> {
        console.log(`[Controller][Car] 전체 주차차량 조회(파라미터 : ${carType})`);

        //딜레이
        // await sleep(300);
        const res = await this.carService.findParkedCarsByType(carType);
        
        return res;
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
        const res = await this.carService.findCarDetailById(id);
        console.log(res);

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
        console.log(`[Controller][Car] 입차 발생(파라미터 : ${type})`);

        return await this.carService.addParkingCar(type);
    }
}
