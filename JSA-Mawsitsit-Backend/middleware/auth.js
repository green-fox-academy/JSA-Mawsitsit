// External Dependencies
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer') {
      return res.status(400).json({ error: 'It\'s a bad request. Please try again.' });
    }

    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_PRIVATE_KEY);

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(500).json({ error: error.toString().split(': ')[1] });
    }
    res.status(401).json({ error: 'Unauthorized request. Please try again.' });
  }
  return true;
};
