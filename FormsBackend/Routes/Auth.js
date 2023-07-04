const jwt = require('jsonwebtoken');
const secretKey = '9aaf1426a254995dee18089ba6a64e60028fd832d75bc0236f5ae4d3d3ec359470bbf69c7c697c2eaa2a29ad2de7cb39ef41050a9ebd0e10e9b9e93aa188601a'; // replace with your generated secret key

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = verifyToken;