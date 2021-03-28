let pgp = require ('pg-promise')();
let db = pgp ('postgres://postgres:admin@localhost:5433/bd');
module.exports = db;