import { Injectable } from '@nestjs/common';
import { CreateTimetableDto } from './dto/create-timetable.dto';
import { UpdateTimetableDto } from './dto/update-timetable.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TimetableService {
  constructor(private readonly db : PrismaClient) {}
  create(createTimetableDto: CreateTimetableDto) {
    return this.db.timetable.create({
      data : {
        time : createTimetableDto.time,
        route_id : createTimetableDto.routeId
      }
    });
  }

  findAll() {
    return this.db.timetable.findMany({
      orderBy : {
        time : 'asc'
      }
    });
  }

  findOne(id: number) {
    return this.db.timetable.findUnique({
      where : {id}
    });
  }

  findAllOneRoute(routeId : number){
    return this.db.timetable.findMany({
      where : {
        route_id : routeId
      },
      orderBy : {
        time : 'asc'
      }
    })
  }

  update(id: number, updateTimetableDto: UpdateTimetableDto) {
    return this.db.timetable.update({
      where : {id},
      data : {
        route_id : updateTimetableDto.routeId,
        time : updateTimetableDto.time
      }
    });
  }

  remove(id: number) {
    return this.db.timetable.delete({
      where : {id}
    });
  }
}
