import express from 'express';

import { authN, adminAuthZ } from '../../handlers/auth';

// import { router as account } from './account';
// import { router as session } from './session';
// import { router as swagger } from './swagger';
// import { router as property } from './property';
import { router as callBack } from './request-call-back';

export const router = express.Router();

// Public API
// router.use('/docs', swagger);
// router.use('/account', account);
// router.use('/session', session);
// router.use('/property', property);
router.use('/request-call-back', callBack);

router.use('/', authN);
// AuthN API

router.use('/', adminAuthZ);
// Admin AuthZ API
