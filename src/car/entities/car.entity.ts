import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany } from "typeorm";

import { BaseModel } from "src/common/entities/base.entity";
import { CarType, ParkingState } from "../types/types";
import { ParkingHistory } from "./parking-history.entity";



@Entity()
export class Car extends BaseModel {
    //차주명
    @ApiProperty({
        name: 'name',
        description: '차주명',
        example: '홍길동',
    })
    @Column('varchar', { length: 20, nullable: true },)
    owner: string;

    //차량번호
    @ApiProperty({
        name: 'number',
        description: '차량번호',
        example: '07가 4538',
    })
    @Column('varchar', { length: 20 })
    number: string;

    //모델명
    @ApiProperty({
        name: 'modelName',
        description: '모델명',
        example: '스포티지',
    })
    @Column('varchar', { length: 20, nullable: true })
    modelName: string;

    //주소
    @ApiProperty({
        name: 'address',
        description: '주소',
        example: '햇살아파드 1단지 103동 906호',
    })
    @Column('varchar', { length: 30, nullable: true })
    address: string;

    //전화번호
    @ApiProperty({
        name: 'phone',
        description: '전화번호',
        example: '01012345678',
    })
    @Column('varchar', { length: 20, nullable: true })
    phone: string;

    //차량구분
    @ApiProperty({
        name: 'carType',
        description: '차량구분',
        example: 'resident',
    })
    @Column({
        type: 'enum',
        enum: CarType,
    })
    carType: CarType;

    //주차상태
    @ApiProperty({
        name: 'state',
        description: '주차상태',
        example: 'IN',
    })
    @Column({
        type: 'enum',
        enum: ParkingState,
    })
    state: ParkingState;

    //주차 이력
    @OneToMany(() => ParkingHistory, (cars) => cars.car, {
        cascade: true,
        //관련 엔티티 즉시 로드
        // eager:true,
        // nullable: true
    })
    @ApiProperty({
        name: 'history',
        description: '주차이력',
        type: () => [ParkingHistory],  // 배열 타입을 명시
        nullable: true
    })
    //Promise<하위 타입> => lazy loading 선언방식 : 해당엔티티 접근시 로딩
    history: Promise<ParkingHistory[]>;
}

