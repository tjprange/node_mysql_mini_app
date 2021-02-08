// config .env
require('dotenv').config();

// express
const express = require('express');
const app = express();

// db connectionc
const db = require('./api/sqlDb.js');

// css
app.use(express.static(__dirname + '/public'));

// parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// ejs
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const q = 'SELECT COUNT(*) AS count FROM users';

  db.query(q, (err, results) => {
    if (err) throw err;
    const count = results[0].count;
    res.render('home', { count: count });
  });
});

app.post('/register', (req, res) => {
  const person = {
    email: req.body.email,
  };

  db.query('INSERT INTO users SET ?', person, (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(8080, () => {
  console.log('http://localhost:8080');
});
