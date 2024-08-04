const jwt = require("jsonwebtoken");
require("dotenv").config();

function Authorization (req, res, next) {
  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader) {
    return res.status(401).json({ message: "Access token not provided" });
  }
  const token = tokenHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Invalid Token" });
  }

}


module.exports = {
  Authorization,
};
