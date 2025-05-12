export interface HolidayData {
  countryCode: string;
  year: number;
  holidays?: string[];
}

export interface PublicHoliday {
  date: string;
  name: string;
  localName: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}
