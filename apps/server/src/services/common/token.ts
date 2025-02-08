import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { Token } from '../../models/common/token';
import { UserDto } from '../../models/dto/user';

export const SECRET_KEY: Secret = 'bilva-secret-key';
export class TokenService {
  create(user: UserDto): Token {
    const accessToken = jwt.sign({ user }, SECRET_KEY, {
      expiresIn: '30 Minutes',
    });
    const refreshToken = jwt.sign({ user, isRefreshToken: true }, SECRET_KEY, {
      expiresIn: '1 Day',
    });
    return { accessToken, refreshToken };
  }

  verify(token: string, isRefreshToken = false): UserDto | undefined {
    try {
      const jwtPayload = jwt.verify(token, SECRET_KEY);

      const isRefreshTokenPayload = !!(jwtPayload as JwtPayload).isRefreshToken;
      if (isRefreshToken === isRefreshTokenPayload) {
        return (jwtPayload as JwtPayload).user;
      } else {
        throw new Error('Token is not valid');
      }
    } catch (error) {
      console.error('Failed to verify token', error);
    }
    return undefined;
  }
}

export const tokenService = new TokenService();
