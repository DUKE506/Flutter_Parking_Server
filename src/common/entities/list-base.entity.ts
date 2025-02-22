import { ApiProperty } from "@nestjs/swagger";



export class ListBase<T> {


    data: T[]
}