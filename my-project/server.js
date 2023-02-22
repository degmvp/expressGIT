const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Labdev - criando server http localhost;3301!');
});

app.listen(3301, () => {
  console.log('Server Running and listening on port 3301!');
});