import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithSession, RequestWithUser } from '../models/common/session';
import { tokenService } from '../services/common/token';
import { UserRole } from '@prisma/client';

export const authN = (
  req: RequestWithSession & RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.session.token) {
    const token = req.session.token;
    if (!token) {
      return res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
    const accessToken = token.accessToken;
    if (!accessToken) {
      return res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
    let user = tokenService.verify(accessToken);
    if (!user) {
      console.debug('access token expired, trying with refreshToken');
      const refreshToken = token.refreshToken;
      user = tokenService.verify(refreshToken, true);
      if (!user) {
        return res.sendStatus(StatusCodes.UNAUTHORIZED);
      }
      req.session.token = tokenService.create(user);
    }
    req.user = user;
  } else {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send('accessToken not provided in authorization header');
    }
    const user = tokenService.verify(accessToken);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send('accessToken not valid');
    }
    req.user = user;
  }
  next();
};

const authZInternal = (roles: Array<UserRole>) => {
  return (req: RequestWithUser, res: Response, next: NextFunction) => {
    if (roles.some((r) => r === req.user.role)) {
      next();
    } else {
      res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
  };
};

export const adminAuthZ = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  return authZInternal([UserRole.ADMIN, UserRole.OPERATOR, UserRole.DEFAULT])(
    req,
    res,
    next
  );
};

export const operatorAuthZ = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  return authZInternal([UserRole.OPERATOR, UserRole.DEFAULT])(req, res, next);
};

export const defaultAuthZ = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  return authZInternal([UserRole.DEFAULT])(req, res, next);
};

export const authZ = defaultAuthZ;
