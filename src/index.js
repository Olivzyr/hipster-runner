const express = require('express');
const sketch = require('./sketch');

const hipsterRunner = express();

hipsterRunner.get('/', (request, response) => {
  return  response.json(sketch());
});

hipsterRunner.listen(3333);