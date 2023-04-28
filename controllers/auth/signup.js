const User = require("../../model/user.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    if (!username || typeof username !== "string") {
      return res.json({ status: "error", error: "Username must be string" });
    }

    if (!password || typeof password !== "string") {
      return res.json({ status: "error", error: "Password must be string" });
    }

    if (password.length < 5) {
      return res.json({
        status: "error",
        error: "Password too small. Should be atleast 6 characters",
      });
    }

    password = await bcrypt.hash(password, 10);
    try {
      const response = await User.create({
        username,
        password,
      });
      return res.json({ status: "ok", message: "User Created" });
      
    } catch (error) {
      console.log(JSON.stringify(error));
      if (error.code === 11000) {
        // duplicate key
        return res.json({ status: "error", error: "User Already Use" });
      } else {
        throw error;
      }
    }
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = signup;
