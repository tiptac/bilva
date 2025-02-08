import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithUser } from '../../models/common/session';
import { userDtoService } from '../../services/dto/user';
import { ApiError } from '../../models/dto/common/error';
import { logout } from '../../handlers/logout';
import { authN } from '../../handlers/auth';

export const router = express.Router();

router.post('/', async (req, res) => {
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

router.patch('/', authN, async (req: RequestWithUser, res) => {
  try {
    const id = req.user.id;
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

router.delete(
  '/',
  authN,
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
