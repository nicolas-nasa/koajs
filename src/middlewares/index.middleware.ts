import { AuthMiddleware } from './auth/index.auth.middleware';

const authMiddleware = new AuthMiddleware();

const middlewares = { authMiddleware };

export default middlewares;
