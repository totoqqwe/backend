# 🌍 Country Info App (Back-End)

This is a backend service that provides information about countries, their borders, population, and national holidays. It also allows adding selected holidays to a user's calendar.

## 📦 Tech Stack

- **NestJS**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **Axios**
- **Docker**
- **dotenv**

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/country-info-app.git
cd country-info-app/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start PostgreSQL via Docker

```bash
docker run --name country-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin \
  -e POSTGRES_DB=mydb \
  -p 5434:5432 \
  -d postgres
```

### 4. Create a `.env` file in the root of `/backend`

```
DB_HOST=localhost
DB_PORT=5434
DB_USERNAME=admin
DB_PASSWORD=admin
DB_NAME=mydb

DATE_NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_NOW_API_URL=https://countriesnow.space/api/v0.1
```

### 5. Run the development server

```bash
npm run start:dev
```

---

## 📌 API Endpoints

### 1. Get available countries

```http
GET /countries
```

### 2. Get detailed country info

```http
GET /countries/:countryCode
```

Returns:
- List of border countries
- Historical population data
- Flag image URL

### 3. Add national holidays to user's calendar

```http
POST /users/:userId/calendar/holidays
```

**Request Body:**

```json
{
  "countryCode": "UA",
  "year": 2024,
  "holidays": ["New Year's Day", "Independence Day"]
}
```

---

## 📜 Scripts

```bash
npm run start        # Start the app
npm run start:dev    # Start in dev mode
npm run build        # Build the app
npm run lint         # Lint the codebase
npm run format       # Format code with Prettier
```

---

## ✅ Additional Notes

- Make sure `.env` is listed in your `.gitignore` file.
- Use `ConfigModule` from `@nestjs/config` to access environment variables.
- Ensure Docker is running before launching the backend.

---

## 📄 License

MIT
