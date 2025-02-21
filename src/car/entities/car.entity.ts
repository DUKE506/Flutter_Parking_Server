import { ApiProperty } from "@nestjs/swagger";

//차량 구분
export enum CarType{
    all = 'all',
    resident = 'resident',
    visit = 'visit',
    outside = 'outside',
}

export class CarRecord {
    constructor(params : CarRecord){
        this.id = params.id;
        this.name = params.name;
        this.number = params.number;
        this.carType = params.carType;
        this.entryTime = params.entryTime;
    }

    id:string;

    @ApiProperty({
        name:'name',
        description : '차주명',
        example:'홍길동',
    })
    name:string;

    @ApiProperty({
        name:'number',
        description : '차량번호',
        example:'07가 4538',
    })
    number:string;

    @ApiProperty({
        name:'carType',
        description:'차량구분',
        example:'resident',
    })
    carType :CarType;

    @ApiProperty({
        name:'entryTime',
        description : '입차시간',
        example:'2025-02-21 18:04:51',
    })
    entryTime:Date;

    



}