const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '.env.' + process.env.NODE_ENV)
});

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3001
}