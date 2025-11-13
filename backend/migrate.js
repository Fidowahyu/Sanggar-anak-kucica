const fs = require('fs');
const path = require('path');
require('dotenv').config();
const DB_PATH = process.env.DB_PATH_JSON || path.join(__dirname, 'data.json');

console.log('Running JSON DB migrate on', DB_PATH);

if (!fs.existsSync(DB_PATH)) {
  const init = { programs: [], facilities: [], registrations: [] };
  fs.writeFileSync(DB_PATH, JSON.stringify(init, null, 2), 'utf8');
}

const raw = fs.readFileSync(DB_PATH, 'utf8');
const data = JSON.parse(raw || '{}');

if (!data.programs || data.programs.length === 0) {
  data.programs = [
    { id: 1, name: 'Playgroup', description: 'Program untuk anak usia 2-4 tahun' },
    { id: 2, name: 'TK A', description: 'Program untuk anak usia 4-5 tahun' },
    { id: 3, name: 'TK B', description: 'Program untuk anak usia 5-6 tahun' },
    { id: 4, name: 'Kelas Seni dan Kreativitas', description: 'Ekstrakurikuler seni dan kreativitas' }
  ];
  console.log('Seeded programs');
}

if (!data.facilities || data.facilities.length === 0) {
  data.facilities = [
    { id: 1, title: 'Ruang Kelas Nyaman', description: 'Ventilasi baik, pencahayaan alami' },
    { id: 2, title: 'Area Bermain Aman', description: 'Outdoor dan indoor dengan standar keselamatan' },
    { id: 3, title: 'Perpustakaan Mini', description: 'Koleksi buku cerita anak dan edukasi' }
  ];
  console.log('Seeded facilities');
}

fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log('Migrations finished.');
