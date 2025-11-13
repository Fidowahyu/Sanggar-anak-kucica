Kucica Backend (Express + SQLite)

Quick start

1. Open a terminal and go to `backend`:

```powershell
cd "d:\Semester 5\kucica\Sanggar-anak-kucica\backend"
```

2. Install dependencies:

```powershell
npm install
```

3. Copy `.env.example` to `.env` and set `API_KEY`:

```powershell
copy .env.example .env
# then edit .env to set a secure API_KEY
```

4. Run migrations (creates `data.db` and seeds programs/facilities):

```powershell
npm run migrate
```

5. Start server:

```powershell
npm start
```

Available endpoints

- `GET /api/programs` — list programs
- `GET /api/facilities` — list facilities
- `POST /api/register` — create registration (body: `name`, `parent_name`, `phone`, `email`, `program`, `note`)
- `GET /api/registrations?api_key=...` — list registrations (protected by `API_KEY`)

If you want the frontend to call this backend, run it and update fetch URLs in the frontend to `http://localhost:4000/api/...`.
