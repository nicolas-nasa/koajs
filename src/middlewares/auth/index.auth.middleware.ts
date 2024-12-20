import { JwtHelper } from '@helper/jwt.helper';
import { Next } from 'koa';

export class AuthMiddleware {
  private jwtHelper: JwtHelper;

  constructor() {
    this.jwtHelper = new JwtHelper();
  }

  public async authenticate(ctx: any, next: Next) {
    try {
      const token = ctx.header.token;

      console.log('token', ctx.header.token);

      if (!token) throw new Error('Token not provided');

      const decoded = this.jwtHelper.verifyToken(token);

      if (!decoded) throw new Error('Invalid token');

      ctx.user = decoded;
      next();
    } catch (error) {
      ctx.status = 401;
      ctx.body = { message: 'Unauthorized' };
    }
  }
}
