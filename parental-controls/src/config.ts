import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 8000,
  databaseUrl: process.env.DATABASE_URL || '',
  mongodbUrl: process.env.MONGODB_URL || '',
  redisUrl: process.env.REDIS_URL || '',
  authServiceUrl: process.env.AUTH_SERVICE_URL || '',
};