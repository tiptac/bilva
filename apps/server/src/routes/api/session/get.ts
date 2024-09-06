import express from 'express';

import { RequestWithSession } from '../../../models/common/session';

export const router = express.Router();

router.get('/', async (req: RequestWithSession, res) => {
  res.json(req.session.user);
});
