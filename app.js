const express = require('express');

const app = express();

//Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Auth API is running!');
});

module.exports = app;
