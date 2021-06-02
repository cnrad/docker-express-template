'use strict';

const express = require('express');

//IF YOU CHANGE THE PORT, change the port in the docker run command as well (find in README)
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);