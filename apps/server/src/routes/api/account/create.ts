import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { RequestWithSession } from '../../../models/common/session';
import { ApiError } from '../../../models/dto/common/error';
import { userDtoService } from '../../../services/dto/user';

export const router = express.Router();

router.post('/', async (req: RequestWithSession, res) => {
  try {
    const fullName = req.body?.fullName;
    const phone = req.body?.phone;
    const email = req.body?.email;
    const password = req.body?.password;
    if (!fullName || !password || !phone || !email) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    const user = await userDtoService.signup({
      email,
      fullName,
      password,
      phone,
    });

    req.session.user = user;
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    console.error('Failed to Signup', error);
    if ((error as ApiError).name === 'ApiError') {
      res.status(StatusCodes.CONFLICT).send(error);
    } else {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
});
