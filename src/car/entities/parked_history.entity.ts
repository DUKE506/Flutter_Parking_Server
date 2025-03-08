import { ApiProperty } from "@nestjs/swagger";
import { ParkingState } from "../types/types";


//주차 히스토리
export class ParkedHistory {
    constructor(params: ParkedHistory) {
        this.id = params.id;
        this.time = params.time;
        this.state = params.state;
    }

    @ApiProperty({
        name: 'id',
        description: '식별자',
        example: '1',
    })
    id: string;
    @ApiProperty({
        name: 'time',
        description: '시간',
        example: '2025-02-24 16:36:41',
    })
    time: Date;
    @ApiProperty({
        name: 'state',
        description: '주차상태',
        example: 'IN',
    })
    state: ParkingState;

}