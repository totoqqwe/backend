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

git clone https://github.com/your-username/country-info-app.git
cd country-info-app/backend

2. Install dependencies
npm install

3. Start PostgreSQL via Docker
docker run --name country-db \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin \
  -e POSTGRES_DB=mydb \
  -p 5434:5432 \
  -d postgres

4. Create a .env(user .env.example) file in the root of /backend

5. Run the development server
npm run start:dev

📌 API Endpoints
1. Get available countries
GET /countries
2. Get detailed country info
GET /countries/:countryCode
Returns:
List of border countries
Historical population data
Flag image URL

3. Add national holidays to user's calendar
POST /users/:userId/calendar/holidays
Request Body:
{
  "countryCode": "UA",
  "year": 2025,
  "holidays": ["New Year's Day", "Independence Day"]
}
📜 Scripts
bash
npm run start        # Start the app
npm run start:dev    # Start in dev mode
npm run build        # Build the app
npm run lint         # Lint the codebase
npm run format       # Format code with Prettier
✅ Additional Notes
Make sure .env is listed in your .gitignore file.

Use ConfigModule from @nestjs/config to access environment variables.

Ensure Docker is running before launching the backend.