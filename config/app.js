import dotenv from 'dotenv';
dotenv.config(); // load env variables
// https://github.com/motdotla/dotenv $todo - get a better understanding of this
 
// loads .env constants - and makes them available from process?

export default {
  environment: process.env.NODE_ENVIRONMENT,
  port: process.env.PORT,
};