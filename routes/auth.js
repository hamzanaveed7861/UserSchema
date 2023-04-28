const express = require("express");
const Router = express.Router();
const signin = require("../controllers/auth/signin.js");
const signup = require("../controllers/auth/signup.js");

Router.post("/login", signin);
Router.post("/register", signup);

module.exports = Router;
