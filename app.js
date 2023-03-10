const express = require('express');
const dotenv = require('dotenv').config();

const photoRoutes = require('./routes/photoRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/photos', photoRoutes);
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
