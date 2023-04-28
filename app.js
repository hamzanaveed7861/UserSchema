const express = require("express");
const bodyParser = require("body-parser");
const database = require("./db/conn.js");
const routes = require("./routes/auth.js");

database();
const app = express();

app.use(bodyParser.json());

app.use("/api/v1", routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
 