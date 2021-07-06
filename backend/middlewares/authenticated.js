const jwt = require("jsonwebtoken");
const secret = require("../config").JWT_SECRET;

const authenticated = (req, res, next) => {
  const { login } = req.cookies;
  try {
    const { email } = jwt.verify(login, secret);
    req.user = email;
    next();
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports = authenticated;
