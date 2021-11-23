require("dotenv").config();
const express = require("express"),
  { userAPI } = require("./routers/index"),
  path = require("path"),
  cors = require("cors"),
  port = process.env.PORT,
  Server = require("./classes/server");

const server = new Server(express);
server.uses(express.urlencoded({ extended: true }));
server.uses(cors());
server.uses(express.json());
server.routes("/api/user/", userAPI());
server.listen(port);
