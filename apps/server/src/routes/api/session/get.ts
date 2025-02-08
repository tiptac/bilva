import express from 'express';

import { RequestWithUser } from '../../../models/common/session';

export const router = express.Router();

router.get('/', async (req: RequestWithUser, res) => {
  res.json(req.user);
});
