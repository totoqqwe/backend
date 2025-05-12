import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { BasicCountry, Country, CountryDetailedInfo, CountryPopulation } from './country.types';

@Injectable()
export class CountryService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private getDateNagerUrl() {
    return process.env.DATE_NAGER_API_URL;
  }

  private getCountriesNowUrl() {
    return process.env.COUNTRIES_NOW_API_URL;
  }

  async getAvailableCountries(): Promise<BasicCountry[]> {
    const url = `${this.getDateNagerUrl()}/AvailableCountries`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  async getCountryInfo(countryCode: string): Promise<CountryDetailedInfo> {
    const countryName = await this.getCountryNameFromCountryCode(countryCode);
    const [borders, population, flag] = await Promise.all([
      this.getBorderCountries(countryCode),
      this.getPopulationData(countryName),
      this.getFlagUrl(countryName),
    ]);

    return {
      borders,
      population,
      flag,
    };
  }

  private async getBorderCountries(countryCode: string): Promise<Country[]> {
    const country: Country = await this.getCountry(countryCode);
    return country.borders || [];
  }

  private async getPopulationData(countryName: string): Promise<CountryPopulation> {
    const url = `${this.getCountriesNowUrl()}/countries/population`;
    const { data } = await firstValueFrom(this.httpService.post(url, { country: countryName }));
    return data.data.populationCounts || [];
  }

  private async getFlagUrl(countryName: string): Promise<string> {
    const url = `${this.getCountriesNowUrl()}/countries/flag/images`;
    const { data } = await firstValueFrom(this.httpService.post(url, { country: countryName }));
    return data.data.flag || null;
  }

  private async getCountryNameFromCountryCode(countryCode: string): Promise<string> {
    const country: Country = await this.getCountry(countryCode);
    return country.commonName;
  }

  private async getCountry(countryCode: string): Promise<Country> {
    const url = `${this.getDateNagerUrl()}/CountryInfo/${countryCode}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }
}
