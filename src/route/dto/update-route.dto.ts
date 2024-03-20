import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './create-route.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateRouteDto extends PartialType(CreateRouteDto) {
    @IsNumber()
    @IsNotEmpty()
    id : number

    @Optional()
    stratingStop? : string
    
    @Optional()
    endingStop?: string;
}
