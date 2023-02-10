const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Unsplash API!' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
