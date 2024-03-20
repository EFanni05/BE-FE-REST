import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RouteService {
  constructor(private readonly db : PrismaClient) {}
  create(createRouteDto: CreateRouteDto) {
    return this.db.routes.create({
      data : {
        staringStop : createRouteDto.stratingStop,
        endingStop : createRouteDto.endingStop
      }
    });
  }

  findAll() {
    return this.db.routes.findMany();
  }

  findOne(id: number) {
    return this.db.routes.findUnique({
      where : {id}
    });
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.db.routes.update({
      where : {id},
      data : {
        staringStop : updateRouteDto.stratingStop,
        endingStop : updateRouteDto.endingStop
      }
    });
  }

  remove(id: number) {
    return this.db.routes.delete({
      where : {id}
    });
  }
}
