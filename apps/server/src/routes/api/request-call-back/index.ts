import express from 'express';
import * as httpProxyMiddleware from 'http-proxy-middleware';
export const router = express.Router();

const googleFormsMiddleware = httpProxyMiddleware.createProxyMiddleware({
  target: process.env.contact_us_form_url,
  changeOrigin: true,
  ignorePath: true,
  pathRewrite: { '^/api/request-call-back': '' },
});

router.post('/', googleFormsMiddleware);

router.get('/', (_, res) => {
  res.json({
    fullName: process.env.contact_us_form_field_fullName,
    phone: process.env.contact_us_form_field_phone,
    email: process.env.contact_us_form_field_email,
    message: process.env.contact_us_form_field_message,
  });
});
