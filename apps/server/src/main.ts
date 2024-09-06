/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { router as routes } from './routes';
import session from 'express-session';

const app = express();

app.use(express.json());

app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    secret: 'somesecret',
    saveUninitialized: false,
    resave: false,
    rolling: true,
  }),
);

app.use('/', routes);

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const server = app.listen(port, host, () => {
  console.log(`[ ready ] Listening at http://${host}:${port}/`);
});
server.on('error', console.error);
