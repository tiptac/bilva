import express from 'express';

import { router as about } from './about';
import { router as account } from './account';
import { router as property } from './property';
import { router as callBack } from './request-call-back';
import { router as session } from './session';
import { router as swagger } from './swagger';
import { router as tokens } from './tokens';

export const router = express.Router();

router.use('/about', about);
router.use('/docs', swagger);
router.use('/request-call-back', callBack);
router.use('/account', account);
router.use('/tokens', tokens);
router.use('/session', session);
router.use('/property', property);
