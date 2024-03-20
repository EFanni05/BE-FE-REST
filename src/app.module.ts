import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { RouteModule } from './route/route.module';
import { TimetableModule } from './timetable/timetable.module';

@Module({
  imports: [RouteModule, TimetableModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
