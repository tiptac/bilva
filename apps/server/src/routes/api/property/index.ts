import express from 'express';

import { authN } from '../../../handlers/auth';

import { router as create } from './create';

export const router = express.Router();

// UnAuthenticated APIs

router.use('/', authN);
// Authenticated APIs
router.use('/', create);
