const {Router} = require("express");
const { registration, login } = require("../controller/user.controller");
const userRouter = Router();
userRouter.post("/signup",registration);
userRouter.post("/login", login);
module.exports={
    userRouter
}