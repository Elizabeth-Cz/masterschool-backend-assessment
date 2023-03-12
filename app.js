const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const photoRoutes = require('./routes/photoRoutes');
const userRoutes = require('./routes/userRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');

connectDB();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/photos', photoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/favorites', favoritesRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
