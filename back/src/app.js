const { router } = require("../routes/index");
const express = require("express");
const cors = require("cors");
var morgan = require("morgan");

const server = express();
server.use(morgan("dev"));

const PORT = process.env.PORT || 3001;

server.use(express.json());

server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty/", router);

server.listen(PORT, () => {
  console.log(`Server is running in PORT: ${PORT}`);
});

module.exports = { server };