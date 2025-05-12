import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { CalendarEvent } from 'src/entities/calendar-event.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { HolidayData, PublicHoliday } from '../holiday/holiday.types';

export class CalendarService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CalendarEvent)
    private readonly calendarEventRepository: Repository<CalendarEvent>,
  ) {}

  async addHolidaysToCalendar(userId: number, holidayData: HolidayData): Promise<CalendarEvent[]> {
    const user: User | null = await this.userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new Error('User not found');
    }

    const url: string = `${this.getDateNagerUrl()}/PublicHolidays/${holidayData.year}/${holidayData.countryCode}`;
    const { data } = await firstValueFrom(this.httpService.get(url));

    let holidaysData: PublicHoliday[] = data;

    if (holidayData.holidays && holidayData.holidays.length > 0) {
      holidaysData = data.filter((holiday: PublicHoliday) =>
        holidayData.holidays?.includes(holiday.name),
      );
    }

    const events: CalendarEvent[] = holidaysData.map((holiday: PublicHoliday) => {
      const event = new CalendarEvent();
      event.title = holiday.name;
      event.date = new Date(holiday.date);
      event.countryCode = holidayData.countryCode;
      event.user = user;
      return event;
    });

    await this.calendarEventRepository.save(events);
    return events;
  }

  private getDateNagerUrl() {
    return process.env.DATE_NAGER_API_URL;
  }
}
