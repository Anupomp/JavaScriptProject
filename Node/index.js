const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
app.use(json)
const employee =[
  {name: "p"}, {name: "a"}
];

app.get('/', (req, res) => {
  res.send(employee);
});

app.post('/', (req, res) => {
  res.json(request.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
