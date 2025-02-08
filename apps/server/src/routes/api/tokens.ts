import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { userDtoService } from '../../services/dto/user';
import { tokenService } from '../../services/common/token';
import { ApiError } from '../../models/dto/common/error';

export const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const username = req.body?.username;
    const password = req.body?.password;
    if (!username || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send('username or password not provided');
      return;
    }
    const user = await userDtoService.login(username, password);

    const token = tokenService.create(user);

    res.status(StatusCodes.CREATED).json(token);
  } catch (error) {
    console.error('Failed to Authenticate', error);
    if ((error as ApiError).name === 'ApiError') {
      res.status(StatusCodes.UNAUTHORIZED).send(error);
    } else {
      res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
});

router.patch('/', async (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send('refreshToken not provided');
  }
  const user = tokenService.verify(refreshToken, true);
  if (user) {
    return res.status(StatusCodes.CREATED).json(tokenService.create(user));
  }
  return res.status(StatusCodes.BAD_REQUEST).send('refreshToken not valid');
});
