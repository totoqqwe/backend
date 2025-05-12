import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEvent } from '../../entities/calendar-event.entity';
import { User } from '../../entities/user.entity';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

@Module({
  imports: [TypeOrmModule.forFeature([CalendarEvent, User]), HttpModule, ConfigModule],
  controllers: [CalendarController],
  providers: [CalendarService],
})
export class CalendarModule {}
