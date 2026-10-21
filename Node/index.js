const express = require('express');
const app = express();
const port = 3000;

const employee =[
  {name: "p"}, {name: "a"}
];

app.get('/', (req, res) => {
  res.send(employee);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});