const { authSecret } = require('./.env');

export default {
  secret: authSecret,
  expiresIn: '7d',
};
