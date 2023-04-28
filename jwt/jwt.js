const jwt = require("jsonwebtoken");
const ENV = require("dotenv").config();
const secret = process.env.JWT_SECRET;
// JWT_SECRET = "asdasdasdassdasdasdqwedqwdfadvsddgvsdfdadasdq324e1234eqw";


const createtoken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    secret
  );

  return token;
};

module.exports = createtoken;
