const express = require('express');

const authRoutes = require('./routes/authRoutes');

const app = express();

//Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Auth API is running!');
});

app.use('/api/auth', authRoutes);

module.exports = app;
