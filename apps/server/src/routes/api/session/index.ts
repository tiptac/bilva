import express from 'express';

import { auth } from '../../../handlers/auth';

import { router as create } from './create';
import { router as get } from './get';
import { router as remove } from './remove';

export const router = express.Router();

// UnAuthenticated APIs
router.use('/', create);

router.use('/', auth);
// Authenticated APIs
router.use('/', remove);
router.use('/', get);
