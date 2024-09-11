import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithSession } from '../models/common/session';

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

export const adminAuthZ = (
  req: RequestWithSession,
  res: Response,
  next: NextFunction
) => {
  if (req.session.user?.isAdmin) {
    next();
  } else {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
};
