const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookiesParser = require("cookie-parser");
const session = require("express-session");
const mongooseSession = require("connect-mongodb-session")(session);
const { connection } = require("./config/db");
const { userRouter } = require("./creworkRouter/user.router");
const { taskRouter } = require("./creworkRouter/task.router");
const store = new mongooseSession({
  uri:process.env.DATABASE,
  collection:"Mysession"
})
const app= express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookiesParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Replace 'your-secret-key' with a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 25 * 60 * 1000 },
    store:store // Set to true if using HTTPS in production
  })
);
const PORT = process.env.PORT || 8080;
app.get("/",(req,res)=>{
    res.send("welcome")
  console.log("welcome to crework")
})
app.use("/auth",userRouter);
app.use("/task",taskRouter)
app.listen(PORT, async() => {
    try{
        await connection;
        console.log("Database is Connected")
    }catch(e){
         console.log("Database is not connected");
    }
    console.log(`App listening on port ${PORT}`);
});