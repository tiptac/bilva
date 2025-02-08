import express from 'express';
import { router as create } from './create';
import { router as patch } from './patch';

export const router = express.Router();

router.use('/', create);
router.use('/', patch);
