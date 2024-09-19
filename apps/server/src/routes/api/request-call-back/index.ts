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

router.get('/', (req, res) => {
  console.log(process.env);
  res.json({
    url: process.env.contact_us_form_url,
    fullName: process.env.contact_us_form_field_fullName,
    phone: process.env.contact_us_form_field_phone,
    email: process.env.contact_us_form_field_email,
    message: process.env.contact_us_form_field_message,
  });
});
