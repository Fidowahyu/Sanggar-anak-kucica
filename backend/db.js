const fs = require('fs');
const path = require('path');

const DB_PATH = process.env.DB_PATH_JSON || path.join(__dirname, 'data.json');

function ensureDB() {
  if (!fs.existsSync(DB_PATH)) {
    const init = { programs: [], facilities: [], registrations: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(init, null, 2), 'utf8');
  }
}

function readDB() {
  ensureDB();
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function getPrograms() {
  const d = readDB();
  return d.programs || [];
}

function getFacilities() {
  const d = readDB();
  return d.facilities || [];
}

function insertRegistration({ name, parent_name, phone, email, program, note }) {
  const d = readDB();
  d.registrations = d.registrations || [];
  const id = Date.now();
  const row = { id, name, parent_name, phone, email, program, note, created_at: new Date().toISOString() };
  d.registrations.push(row);
  writeDB(d);
  return id;
}

function listRegistrations() {
  const d = readDB();
  return (d.registrations || []).slice().reverse();
}

module.exports = {
  getPrograms,
  getFacilities,
  insertRegistration,
  listRegistrations,
};
