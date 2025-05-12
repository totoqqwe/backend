import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
