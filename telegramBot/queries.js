const pool = require('./db');

pool.query(
    `create table formdata (
      appeal text,
      phone varchar(50),
      email varchar(50)
    )`,
    (err, res) => {
      console.log(err, res);
      pool.end();
    }
  );