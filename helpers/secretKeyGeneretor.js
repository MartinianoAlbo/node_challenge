const crypto = require('crypto');

// Genete a random string
const keyGenerator = () => {
const secret = crypto.randomBytes(32);
const base64Secret = secret.toString('base64');

return base64Secret;
}

module.exports = { keyGenerator }