import { ApiProperty } from "@nestjs/swagger";


export enum ParkingState{
    IN = 'IN',
    OUT = 'OUT',
}


//주차 히스토리
export class ParkingHistory{
    constructor(params:ParkingHistory){
        this.id = params.id;
        this.time = params.time;
        this.state = params.state;
    }

    @ApiProperty({
        name : 'id',
        description : '식별자',
        example:'1',
    })
    id:string;
    @ApiProperty({
        name : 'time',
        description : '시간',
        example:'2025-02-24 16:36:41',
    })
    time:Date;
    @ApiProperty({
        name : 'state',
        description : '주차상태',
        example:'IN',
    })
    state:ParkingState;

}