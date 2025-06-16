import { IsAlphanumeric, IsNotEmpty, IsNumber, MaxLength } from "class-validator"

export class postDto{
    @IsNotEmpty()
    @IsAlphanumeric()
    @MaxLength(30)
    title:string

    @MaxLength(100)
    body:string

    @IsNumber()
    userId:number
}