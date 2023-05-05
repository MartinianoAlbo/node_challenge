const jwt = require('jsonwebtoken');

const login = (req, res) => {

  // User Auth
  const useremail = req.body.email;
  const user = { email: useremail };

  // Generate access token 
  const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  const refreshToken = jwt.sign(user, process.env.JWT_SECRET_REFRESH );
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
}

//Refresh Token
const refreshToken = (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ accessToken: accessToken });
  });
}

module.exports = {
  login,
  refreshToken
}