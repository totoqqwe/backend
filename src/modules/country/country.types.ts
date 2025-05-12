export interface CountryDetailedInfo {
  borders: any;
  population: any;
  flag: any;
}

export interface BasicCountry {
  countryCode: string;
  name: string;
}

export interface Country {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Country[] | null;
}

export interface CountryPopulation {
    year: number;
    value: number;
}