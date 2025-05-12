import { Body, Controller, Param, Post } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { HolidayData } from '../holiday/holiday.types';

@Controller('users/:userId/calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Post('holidays')
  async addHolidaysToCalendar(@Param('userId') userId: string, @Body() body: HolidayData) {
    return await this.calendarService.addHolidaysToCalendar(parseInt(userId), body);
  }
}
