import express from 'express';
import * as httpProxyMiddleware from 'http-proxy-middleware';
export const router = express.Router();

const googleFormsMiddleware = httpProxyMiddleware.createProxyMiddleware({
  target:
    'https://docs.google.com/forms/d/e/1FAIpQLSdUOLjkDv9dIWrCHFiVytnqyfEJ5c3sAEOMMiAxj2hd1aGAPA/formResponse',
  changeOrigin: true,
  ignorePath: true,
  pathRewrite: { '^/api/request-call-back': '' },
});

router.post('/', googleFormsMiddleware);
