import express from 'express';
import * as path from 'path';
import serveIndex from 'serve-index';

import { router as api } from './api';
import { router as ui } from './ui';

export const router = express.Router();

const assetsPath = path.join(__dirname, '..', '..', '..', '..', 'assets');
router.use('/assets', serveIndex(assetsPath));
router.use('/assets', express.static(assetsPath));

router.use('/ui', ui);
router.use('/api', api);
