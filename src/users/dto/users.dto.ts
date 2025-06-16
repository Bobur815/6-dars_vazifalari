import { IsAlpha, IsNumber, Max, MaxLength, Min } from "class-validator"

export class userDto{
    @IsAlpha()
    @MaxLength(20)
    username:string

    @IsNumber()
    @Max(100)
    @Min(14)
    age:number
}