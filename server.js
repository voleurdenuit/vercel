const express = require('express')
const mysql = require('mysql')
const next = require('next');
const port = 3000
const app = express();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cimetiere'
  });
  
  db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  module.export = app;