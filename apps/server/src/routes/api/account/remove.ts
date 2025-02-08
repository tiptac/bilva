import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { logout } from '../../../handlers/logout';
import { RequestWithUser } from '../../../models/common/session';
import { userDtoService } from '../../../services/dto/user';

export const router = express.Router();

router.delete(
  '/',
  async (req: RequestWithUser, res, next) => {
    try {
      await userDtoService.delete(req.user.id);
      next();
    } catch (error) {
      console.error('Failed to delete user', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  },
  logout
);
