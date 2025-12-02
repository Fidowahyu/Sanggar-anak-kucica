/*
  inspect_db.js

  Quick helper to view the `registrations.db` SQLite database from the project.

  Usage (PowerShell):
    node inspect_db.js            # prints table to console
    node inspect_db.js --csv > out.csv

*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'registrations.db');
const args = process.argv.slice(2);
const wantCsv = args.includes('--csv');

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Failed to open database at', dbPath);
    console.error(err.message);
    process.exit(1);
  }
});

db.all('SELECT id, parentName, childName, phone, program, createdAt FROM registrations ORDER BY createdAt DESC', (err, rows) => {
  if (err) {
    console.error('Query error:', err.message);
    db.close();
    process.exit(1);
  }

  if (wantCsv) {
    // print CSV header
    console.log('id,parentName,childName,phone,program,createdAt');
    for (const r of rows) {
      // basic escaping of double quotes
      const esc = (s) => '"' + String(s).replace(/"/g, '""') + '"';
      console.log([r.id, esc(r.parentName), esc(r.childName), esc(r.phone), r.program, r.createdAt].join(','));
    }
  } else {
    console.table(rows);
  }

  db.close();
});
