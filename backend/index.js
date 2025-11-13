require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getPrograms, getFacilities, insertRegistration, listRegistrations } = require('./db');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/programs', (req, res) => {
  try {
    const programs = getPrograms();
    res.json({ ok: true, data: programs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
});

app.get('/api/facilities', (req, res) => {
  try {
    const facilities = getFacilities();
    res.json({ ok: true, data: facilities });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
});

app.post('/api/register', (req, res) => {
  try {
    const { name, parent_name, phone, email, program, note } = req.body;
    if (!name || !phone) return res.status(400).json({ ok: false, error: 'name_and_phone_required' });
    const id = insertRegistration({ name, parent_name, phone, email, program, note });
    res.json({ ok: true, id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
});

// Simple admin endpoint protected by API key
app.get('/api/registrations', (req, res) => {
  const key = req.header('x-api-key') || req.query.api_key;
  if (!key || key !== process.env.API_KEY) return res.status(401).json({ ok: false, error: 'unauthorized' });
  try {
    const rows = listRegistrations();
    res.json({ ok: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
});

app.listen(PORT, () => {
  console.log(`Kucica backend listening on port ${PORT}`);
});
