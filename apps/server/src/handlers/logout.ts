import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithSession } from '../models/common/session';

export const logout = async (req: RequestWithSession, res: Response) => {
  try {
    req.session.destroy(() => {
      res.sendStatus(StatusCodes.RESET_CONTENT);
    });
  } catch (error) {
    console.error('Failed to Logout', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
