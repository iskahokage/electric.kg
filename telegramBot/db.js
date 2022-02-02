const {Pool, Client} = require('pg')
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "electric312",
  password: "1",
  port: "5432"
});
module.exports = pool;