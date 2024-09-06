import express from 'express';

import { auth } from '../../handlers/auth';

import { router as account } from './account';
import { router as session } from './session';
import { router as swagger } from './swagger';
import { router as property } from './property';

export const router = express.Router();

// UnAuthenticated API
router.use('/docs', swagger);
router.use('/account', account);
router.use('/session', session);
router.use('/property', property);

router.use('/', auth);
// Authenticated API
