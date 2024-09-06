import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { RequestWithSession } from '../../../models/common/session';
import { ApiError } from '../../../models/dto/common/error';
import { userDtoService } from '../../../services/dto/user';

export const router = express.Router();

router.post('/', async (req: RequestWithSession, res) => {
  try {
    const username = req.body?.username;
    const password = req.body?.password;
    if (!username || !password) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    const user = await userDtoService.login(username, password);
    req.session.loggedIn = true;
    req.session.user = user;
    res.status(StatusCodes.CREATED).json(req.session.user);
  } catch (error) {
    console.error('Failed to Authenticate', error);
    if ((error as ApiError).name === 'ApiError') {
      res.status(StatusCodes.UNAUTHORIZED).send(error);
    } else {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
});
