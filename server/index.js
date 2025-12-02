const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'registrations.db');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Failed to open DB', err);
    process.exit(1);
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      parentName TEXT NOT NULL,
      childName TEXT NOT NULL,
      phone TEXT NOT NULL,
      program TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/registrations', (req, res) => {
  const { parentName, childName, phone, program } = req.body || {};
  if (!parentName || !childName || !phone || !program) {
    return res.status(400).send('Missing required fields');
  }

  const allowed = ['paud', 'psikolog'];
  if (!allowed.includes(program)) {
    return res.status(400).send('Invalid program');
  }

  const stmt = db.prepare('INSERT INTO registrations (parentName, childName, phone, program) VALUES (?, ?, ?, ?)');
  stmt.run(parentName, childName, phone, program, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).send('DB error');
    }
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/api/registrations', (req, res) => {
  db.all('SELECT * FROM registrations ORDER BY createdAt DESC', (err, rows) => {
    if (err) return res.status(500).send('DB error');
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`PAUD backend listening on http://localhost:${PORT}`);
});
