import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithSession, RequestWithUser } from '../models/common/session';
import { tokenService } from '../services/common/token';
import { UserRole } from '@prisma/client';

export const authN = (
  req: RequestWithSession,
  res: Response,
  next: NextFunction
) => {
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
};

export const authNAccessToken = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .send('accessToken not provided in authorization header');
    return;
  }
  const user = tokenService.verify(accessToken)?.['user'];
  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).send('accessToken not valid');
    return;
  }
  req.user = user;
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
