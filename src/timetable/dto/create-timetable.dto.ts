import { IsDateString, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateTimetableDto {
    @IsDateString()
    @IsNotEmpty()
    time : string

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    routeId : number
}
