import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { RequestWithSession } from '../../../models/common/session';
import { propertyDtoService } from '../../../services/dto/property';

export const router = express.Router();

router.post('/', async (req: RequestWithSession, res) => {
  try {
    const summary = req.body?.summary;
    const description = req.body?.description;
    const address = req.body?.address;

    if (!summary || !description || !address) {
      res.sendStatus(StatusCodes.BAD_REQUEST);
      return;
    }
    const user = await propertyDtoService.createProperty(req.session.user.id, {
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
