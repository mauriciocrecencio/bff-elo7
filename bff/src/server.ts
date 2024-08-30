import 'dotenv/config';

import express from 'express';

import { routes } from './routes';

export const app = express();

let port = process.env.PORT || 3000;
if (process.env.NODE_ENV === 'test') {
  port = 3001;
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🔥`);
});
