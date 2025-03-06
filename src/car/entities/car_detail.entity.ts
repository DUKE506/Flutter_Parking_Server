import { ApiProperty } from "@nestjs/swagger";
import { ParkingHistory } from "./parking_history.entity";
import { CarType, ParkingState } from "../types/types";


//차량 상세 모델
export class CarDetail{
    constructor(params:CarDetail){
        this.id = params.id;
        this.name = params.name;
        this.number = params.number;
        this.modelName= params.modelName
        this.address = params.address;
        this.phone = params.phone;
        this.carType = params.carType;
        this.state = params.state;
        this.history = params.history;
    }

    //식별자
    @ApiProperty({
        name : 'id',
        description : '식별자',
        example : '1'
    })
    id:string;

    //차주명
    @ApiProperty({
        name : 'name',
        description : '차주명',
        example : '홍길동',
        nullable: true
    })
    name:string | null;

    //모델명
    @ApiProperty({
        name : 'name',
        description : '모델명',
        example : '스포티지',
        nullable: true
    })
    modelName:string | null;

    //차량번호
    @ApiProperty({
        name : 'number',
        description : '차량번호',
        example : '18가 1894'
    })
    number:string;

    //주소
    @ApiProperty({
        name : 'address',
        description : '주소',
        example : '럭키아파트 A동 509호 ',
        nullable: true
    })
    address:string | null;

    //연락처
    @ApiProperty({
        name : 'phone',
        description : '연락처',
        example : '010-1234-5678',
        nullable: true
    })
    phone:string | null;

    //차량구분
    @ApiProperty({
        name : 'carType',
        description : '차량구분',
        example : 'resident'
    })
    carType:CarType;
    
    //주차상태
    @ApiProperty({
        name : 'state',
        description : '주차상태',
        example : 'IN'
    })
    state:ParkingState;

    //주차이력
     //주차이력
     @ApiProperty({
        name: 'history',
        description: '주차이력',
        type: () => [ParkingHistory],  // 배열 타입을 명시
        nullable: true
    })
    history:ParkingHistory[] | null;
    
}