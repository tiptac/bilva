import express from 'express';

import { auth } from '../../../handlers/auth';

import { router as create } from './create';

export const router = express.Router();

// UnAuthenticated APIs

router.use('/', auth);
// Authenticated APIs
router.use('/', create);
