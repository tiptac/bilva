import express from 'express';
import * as path from 'path';
import serveIndex from 'serve-index';

// import { authN, adminAuthZ } from '../../handlers/auth';

// import { router as account } from './account';
// import { router as session } from './session';
// import { router as swagger } from './swagger';
// import { router as property } from './property';
import { router as callBack } from './request-call-back';

export const router = express.Router();

const assetsPath = path.join(__dirname, '..', '..', 'assets');
// router.get('/assets', (req, res) => {
//   res.json({ dirName: __dirname });
// });
router.use('/assets', serveIndex(assetsPath));
router.use('/assets', express.static(assetsPath));

// Public API
// router.use('/docs', swagger);
// router.use('/account', account);
// router.use('/session', session);
// router.use('/property', property);
router.use('/request-call-back', callBack);

// router.use('/', authN);
// AuthN API

// router.use('/', adminAuthZ);
// Admin AuthZ API
