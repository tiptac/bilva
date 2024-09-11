import express from 'express';

import { authN } from '../../../handlers/auth';

import { router as create } from './create';
import { router as patch } from './patch';
import { router as remove } from './remove';

export const router = express.Router();

// UnAuthenticated APIs
router.use('/', create);

router.use('/', authN);
// Authenticated APIs
router.use('/', remove);
router.use('/', patch);
