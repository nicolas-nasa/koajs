import dotenv from 'dotenv';

dotenv.config();

const envs = {
  dataBaseUrl: process.env.APP_DATABASE_URL
};

export { envs };
