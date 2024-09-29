import { config } from "dotenv";

config();

const appConfig = {
  port: process.env.PORT || 40321,
  env: process.env.NODE_ENV || "development",

  jwt: {
    secret: process.env.JWT_SECRET,
    expireIn: process.env.JWT_EXPIRES_IN,
  },
};

export default appConfig;
