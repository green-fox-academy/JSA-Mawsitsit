// External Dependencies
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    if (!req.body.userId || req.body.userId !== decodedToken.userId) {
      res.status(401).json({ error: 'Please provide a valid user id.' });
    }
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(500).json({ error: error.toString().split(': ')[1] });
    }
    res.status(401).json({ error: 'It\'s a Bad request. Please try again.' });
  }
  return true;
};
