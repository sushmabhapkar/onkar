//imports
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const mongoDBPassword = process.env.mongoDBPassword;

//routes
const mainpageroute = require("./routes/mainpageroute");
const user = require("./routes/user");
const expenseroute = require("./routes/expense");
const purchase = require("./routes/purchase");
const resetpassword = require("./routes/resetpassword");

//middlewares
app.use(cors());
app.use(express.json());

//static serving
app.use(express.static(path.join(__dirname, "public")));

//redirection
app.use(mainpageroute);
app.use("/user", user);
app.use("/expense", expenseroute);
app.use("/purchase", purchase);
app.use("/password", resetpassword);

//this is to intialise database tables and then start the servers

mongoose
  .connect(
    `mongodb+srv://onkardivekar389:8wUTPcAQYfGi6qmr@cluster0.bnx5kcl.mongodb.net/expense?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(process.env.PORT);
    console.log("server strted and mongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
