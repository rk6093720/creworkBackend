const jwt = require("jsonwebtoken");
require("dotenv").config();

function Authorization (req, res, next) {
  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader) {
    return res.status(401).json({ message: "Access token not provided" });
  }
  const token = tokenHeader.split(" ")[1];
  console.log(token)
  if (!token) {
    return res.status(400).json({ message: "Invalid Token" });
  }
  jwt.verify(token, "Login",(err,data)=>{
    if(err){
       return res.status(500).json({msg:"something went wrong"});
    }else{
       req.user = data;
        next()
        return res.status(200). json({ data:req.user})
    }                          
  })
}


module.exports = {
  Authorization,
};
