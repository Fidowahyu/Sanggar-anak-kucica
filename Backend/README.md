# PAUD Kucica Backend

Simple Express backend that stores registrations in a SQLite database.

Quick start:

1. cd server
2. npm install
3. npm start

Server runs on port 4001 by default. Endpoints:
- GET `/api/health` - health check
- POST `/api/registrations` - create registration (body JSON: parentName, childName, phone, program ("paud" or "psikolog"))
- GET `/api/registrations` - list registrations
