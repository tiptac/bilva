import express from 'express';
import * as path from 'path';
import serveIndex from 'serve-index';

import { router as swagger } from './swagger';

import { router as callBack } from './request-call-back';

export const router = express.Router();

const assetsPath = path.join(__dirname, '..', '..', 'assets');

router.use('/assets', serveIndex(assetsPath));
router.use('/assets', express.static(assetsPath));

router.use('/request-call-back', callBack);

router.use('/', swagger);
