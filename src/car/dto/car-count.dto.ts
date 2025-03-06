import { ApiProperty } from "@nestjs/swagger";
import { CarType } from "../types/types";



export class CarCount{
    //타입
    @ApiProperty({
        name:'carType',
        description:'차량구분',
        example:'resident',
    })
    carType : CarType;

    //값
    @ApiProperty({
        name:'value',
        description:'차량수',
        example:16,
    })
    value : Number;
}