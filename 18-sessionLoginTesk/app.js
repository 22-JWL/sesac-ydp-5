const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, //1m
    },
  })
);

app.get('/', (req, res) => {
  res.render('session', { title: '안녕하세요?' });
});
