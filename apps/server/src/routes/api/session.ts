import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { authN } from '../../handlers/auth';
import { logout } from '../../handlers/logout';
import { RequestWithSession } from '../../models/common/session';
import { ApiError } from '../../models/dto/common/error';
import { tokenService } from '../../services/common/token';
import { userDtoService } from '../../services/dto/user';

export const router = express.Router();

router.post('/', async (req: RequestWithSession, res) => {
  try {
    const username = req.body?.username;
    const password = req.body?.password;
    if (!username || !password) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }
    const user = await userDtoService.login(username, password);
    const token = tokenService.create(user);
    req.session.token = token;
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    console.error('Failed to Authenticate', error);
    if ((error as ApiError).name === 'ApiError') {
      res.status(StatusCodes.UNAUTHORIZED).send(error);
    } else {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
});

router.delete('/', authN, logout);
