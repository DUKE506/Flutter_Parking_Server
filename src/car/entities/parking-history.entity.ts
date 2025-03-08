import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "src/common/entities/base.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Car } from "./car.entity";

@Entity()
export class ParkingHistory extends BaseModel {
    //입차시간
    @ApiProperty({
        name: 'entryAt',
        description: '입차시간',
        example: '2025-03-06 16:45:12',
    })
    @Column()
    entryAt: Date;

    //출차시간
    @ApiProperty({
        name: 'existAt',
        description: '출차시간',
        example: '2025-03-06 16:45:12',
    })
    @Column({ nullable: true })
    existAt: Date;

    @ManyToOne(() => Car, (car) => car.history, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
        eager: true,
    })
    @JoinColumn({ name: 'car', referencedColumnName: 'id' })
    car: Car
}