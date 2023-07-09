import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import conn from "./db/conn.js";
import routes from "./routes/router.js";

const app = express();

app.use(cors());

app.use(express.json());

// DB Connection
conn();

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor Online!");
});

// export const handler = serverless(app);