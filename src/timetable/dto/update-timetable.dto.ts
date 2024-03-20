import { PartialType } from '@nestjs/mapped-types';
import { CreateTimetableDto } from './create-timetable.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateTimetableDto extends PartialType(CreateTimetableDto) {
    @IsNumber()
    @IsNotEmpty()
    id : number

    @Optional()
    routeId?: number;

    @Optional()
    time?: string;
}
