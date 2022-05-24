const express = require("express");
const app = express();
const port = 5000;

require("./db/conn");
// const User = require('./models/user');

app.use(express.json());

//link router file
app.use(require("./router/auth"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
