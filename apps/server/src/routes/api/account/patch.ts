import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { RequestWithSession } from '../../../models/common/session';
import { ApiError } from '../../../models/dto/common/error';
import { userDtoService } from '../../../services/dto/user';

export const router = express.Router();

router.patch('/', async (req: RequestWithSession, res) => {
  try {
    const id = req.session.user.id;
    const fullName: string = req.body?.fullName;
    const phone: string = req.body?.phone;
    const email: string = req.body?.email;
    const password: string = req.body?.password;
    if (!fullName && !password && !phone && !email) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    const user = await userDtoService.updateUser(id, {
      email,
      fullName,
      password,
      phone,
    });

    req.session.user = user;
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    console.error('Failed to Patch', error);
    if ((error as ApiError).name === 'ApiError') {
      res.status(StatusCodes.CONFLICT).send(error);
    } else {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
});
