const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const conn = require("./db/conn.js");
const routes = require("./routes/router.js");

const app = express();

app.use(cors());

app.use(express.json());

// DB Connection
conn();

app.use("/api", routes);

// app.listen(3000, function () {
//   console.log("Servidor Online!");
// });

module.exports.handler = serverless(app);
