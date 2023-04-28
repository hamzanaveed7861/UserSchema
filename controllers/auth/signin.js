const User = require("../../model/user.js");
const bcrypt = require("bcrypt");
const createtoken = require("../../jwt/jwt.js");
const securitykey = require("../../.env");
const { verify } = require("jsonwebtoken");

const jwt = require("jsonwebtoken");
const ENV = require("dotenv").config();
const secret = process.env.JWT_SECRET;


// JWT_SECRET = "asdasdasdassdasdasdqwedqwdfadvsddgvsdfdadasdq324e1234eqw";




const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).lean();
    if (!user) {
      return res.json({ status: "error", error: "No user found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const accesstoken = createtoken(user);
      const decoded = jwt.verify(accesstoken, secret);
      const iduser = decoded.id;
      const usernames = decoded.username;
      console.log(decoded);

      return res.json({ status: "ok", data: accesstoken, id: iduser, username: usernames, 
      message: "Login Successful" });
    }
    
    // console.log(verifyjwt);
    res.json({ status: "ok", message: "Login Successful" });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = signin;
