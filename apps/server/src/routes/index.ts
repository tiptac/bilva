import express from 'express';

import { router as api } from './api';

export const router = express.Router();

router.use('/api', api);
