const User = require("../models/user");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById({ _id }).select("_id");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "No, token, not authorized" });
  }
};

module.exports = protect;
