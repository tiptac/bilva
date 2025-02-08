import express, { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { tokenService } from '../../../services/common/token';

export const router = express.Router();

router.patch('/', async (req: Request, res) => {
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
