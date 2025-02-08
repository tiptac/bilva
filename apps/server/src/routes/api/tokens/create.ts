import express, { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiError } from '../../../models/dto/common/error';
import { tokenService } from '../../../services/common/token';
import { userDtoService } from '../../../services/dto/user';

export const router = express.Router();

router.post('/', async (req: Request, res) => {
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
