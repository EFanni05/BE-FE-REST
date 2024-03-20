import { IsNotEmpty, IsString } from "class-validator";

export class CreateRouteDto {
    @IsString()
    @IsNotEmpty()
    stratingStop : string

    @IsString()
    @IsNotEmpty()
    endingStop : string
}
