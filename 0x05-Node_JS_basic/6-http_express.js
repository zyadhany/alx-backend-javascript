const express = require('express');

const app = express();

const PORT = 1245;
const HOST = 'localhost';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
