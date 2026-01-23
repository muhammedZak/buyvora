const express = require('express');

const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Auth API is running!');
});

app.use('/api/auth', authRoutes);

module.exports = app;
