import { Controller, Get, Post, Body, Patch, Param, Delete, ForbiddenException } from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('create')
  create(@Body() createRouteDto: CreateRouteDto) {
    if(createRouteDto.stratingStop == createRouteDto.endingStop){
      throw new ForbiddenException('You cant have a train start and end the same stop')
    }
    return this.routeService.create(createRouteDto);
  }

  @Get('findAll')
  findAll() {
    return this.routeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(+id);
  }
}
