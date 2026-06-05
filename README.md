# Prince Kumar MERN Portfolio

Modern responsive full stack portfolio with admin dashboard, dark mode and light mode.

## Admin Login

```txt
Email: pk8645595@gmail.com
Password: prince@2000
```

Backend automatically creates/updates this admin when the server starts.

## Run Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Run Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Environment

Backend `.env` should contain:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/prince_portfolio
JWT_SECRET=change_this_secret_key
CLIENT_URL=http://localhost:5173
ADMIN_NAME=Prince Kumar
ADMIN_EMAIL=pk8645595@gmail.com
ADMIN_PASSWORD=prince@2000
```

Frontend `.env` should contain:

```env
VITE_API_URL=http://localhost:5000/api
```

## Added Features

- Fixed admin login credentials
- Auto admin seed on backend start
- Admin-only login validation
- Dark mode and light mode toggle
- Admin link added in navbar
- Theme toggle added in frontend and admin panel
