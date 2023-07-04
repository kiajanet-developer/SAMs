const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
}

console.log(generateSecretKey());
const secretKeyUsedformytoken = '9aaf1426a254995dee18089ba6a64e60028fd832d75bc0236f5ae4d3d3ec359470bbf69c7c697c2eaa2a29ad2de7cb39ef41050a9ebd0e10e9b9e93aa188601a';