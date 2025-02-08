import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithUser } from '../../models/common/session';
import { propertyDtoService } from '../../services/dto/property';
import { authN } from '../../handlers/auth';

export const router = express.Router();

router.post('/', authN, async (req: RequestWithUser, res) => {
  try {
    const summary = req.body?.summary;
    const description = req.body?.description;
    const address = req.body?.address;

    if (!summary || !description || !address) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    const user = await propertyDtoService.createProperty(req.user.id, {
      summary,
      description,
      address,
    });
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    console.error('Failed to Add', error);
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
});
