import express from 'express';

import { logout } from '../../../handlers/logout';

export const router = express.Router();

router.delete('/', logout);
