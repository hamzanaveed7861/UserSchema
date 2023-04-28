const mongoose = require("mongoose");
const JWT_SECRET = "asdasdasdassdasdasdqwedqwdfadvsddgvsdfdadasdq324e1234eqw";

mongoose.set("strictQuery", false);
const database = async () => {
  try {
    // mongodb+srv://login:<password>@login.129cswd.mongodb.net/?retryWrites=true&w=majority
    mongoose.connect(
      "mongodb+srv://task1:task1@login.mbfnfxf.mongodb.net/login?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connection successful");
  } catch (err) {
    console.log("Error: " + err);
  }
};

module.exports = database;
