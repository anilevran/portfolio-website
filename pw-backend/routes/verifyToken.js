const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  console.log(JSON.stringify(req.headers));
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");
  console.log("braaaaaaaaaaa");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    console.log("asd");
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = auth;
