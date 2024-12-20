import * as jwt from 'jsonwebtoken';

export class JwtHelper {
  private secreat: string;
  private expires: string;

  constructor() {}

  async generateToken(payload: any) {
    return jwt.sign(payload, this.secreat, { expiresIn: this.expires });
  }

  async verifyToken(token: string): Promise<any> {
    try {
      return jwt.verify(token, this.secreat);
    } catch (err) {
      throw new Error('Invalid token');
    }
  }
}
