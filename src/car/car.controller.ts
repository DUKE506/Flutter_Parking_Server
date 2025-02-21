import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CarRecord, CarType } from './entities/car.entity';
import { parkingCarData } from './data';
import { sleep } from './utils/utils';
import { CarCount } from './dto/car-count.dto';

@ApiTags('car')
@Controller('car')
export class CarController {


    @ApiOperation({summary:'현재 주차차량 카운트'})
    @ApiOkResponse({
        description:'주차차량카운트 조회 성공',
        type:CarCount,
        isArray:true,
    })
    @Get('/dashboard')
    async getCarCounts():Promise<CarCount[] | null>{
        await sleep(300);
        const data:CarCount[] = Object.values(CarType).map((type)=> ({
            type,
            value : type == 'all' ? parkingCarData.length : parkingCarData.filter((e)=> e.carType == type).length
        }));

        
        return data;
    }

    @Get(':type')
    @ApiParam({
        name : 'type',
        description:'차량구분',
        enum:CarType,
    })
    @ApiOperation({summary:'전체 주차차량 조회값'})
    @ApiOkResponse({
        description:'주차차량 조회 성공',
        type:CarRecord,
        isArray:true,
    })
    async getParkingCarByType(
        @Param('type') carType: CarType
    ):Promise<CarRecord[]>{
        
        //딜레이
        await sleep(300);

        //all인 경우 전체를 반환
        if(carType == 'all'){
            return parkingCarData;
        }
        
        //나머지 타입의 경우 해당 데이터만 반환
        const data = parkingCarData.filter((e) => e.carType == carType);
        
        return data;
    }
}
