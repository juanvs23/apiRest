const express = require("express"),
  router = express.Router(),
  Users = require("./users.router");

const users = new Users(router);
const userAPI = () => {
  users.userList();
  return router;
};

module.exports = {
  userAPI,
};
