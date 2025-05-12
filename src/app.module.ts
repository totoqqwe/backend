import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './modules/database/database.module';
import { CountryModule } from './modules/country/country.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    CountryModule,
    CalendarModule,
  ],
})
export class AppModule {}
