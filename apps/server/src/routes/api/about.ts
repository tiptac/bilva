import express from 'express';

export const router = express.Router();

export enum Status {
  OK = 'OK',
}

router.get('/', (_, res) => {
  res.json({
    uptime: process.uptime().toFixed(0),
  });
});
