import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { BasicCountry, CountryDetailedInfo } from './country.types';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @Get()
  async getCountries(): Promise<BasicCountry[]> {
    return await this.countryService.getAvailableCountries();
  }

  @Get(':countryCode')
  async getCountryInfo(@Param('countryCode') countryCode: string): Promise<CountryDetailedInfo> {
    return await this.countryService.getCountryInfo(countryCode);
  }
}
