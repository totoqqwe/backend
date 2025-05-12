export default () => ({
  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  api: {
    dateNagerUrl: process.env.DATE_NAGER_API_URL || 'https://date.nager.at/api/v3',
    countriesNowUrl: process.env.COUNTRIES_NOW_API_URL || 'https://countriesnow.space/api/v0.1',
  },
});
