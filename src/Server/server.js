const express = require("express");
const cors = require("cors");
const Port = 4000;
const { connectionToDatabase, User } = require("./MogoDBSchema");
console.log(User);
connectionToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const {  email, password } = req.body;
  const user =await User.findOne({email});
  if (user) {
    try {
      res
        .status(201)
        .json({ message: "user found successfully", user });
    } catch (e) {
      console.log("Error",e);
    }
  } else {
    res.status(400).json({ message: "Create an account first" });
  }
});

app.listen(Port, () => {
  console.log("server running...");
});
