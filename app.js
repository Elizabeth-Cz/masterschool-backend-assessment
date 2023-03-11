const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const photoRoutes = require('./routes/photoRoutes');
const userRoutes = require('./routes/userRoutes');

connectDB();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/photos', photoRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
