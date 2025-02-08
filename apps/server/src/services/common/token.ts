import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { Token } from '../../models/common/token';
import { UserDto } from '../../models/dto/user';

export const SECRET_KEY: Secret = 'bilva-secret-key';
export class TokenService {
  create(user: UserDto): Token {
    const accessToken = jwt.sign({ user }, SECRET_KEY, {
      expiresIn: '30 Minutes',
    });
    const refreshToken = jwt.sign({ isRefreshToken: true, user }, SECRET_KEY, {
      expiresIn: '1 Day',
    });
    return { accessToken, refreshToken };
  }

  verify(token: string): JwtPayload | undefined {
    try {
      return <JwtPayload>jwt.verify(token, SECRET_KEY);
    } catch (error) {
      console.error('Failed to verify token', error);
    }
    return undefined;
  }
}

export const tokenService = new TokenService();
