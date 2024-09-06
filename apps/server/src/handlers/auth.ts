import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const auth = (
  req: Request & { session: { loggedIn: boolean } },
  res: Response,
  next: NextFunction,
) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
};
