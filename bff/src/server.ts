import 'dotenv/config';

import express from 'express';

import { routes } from './routes';

const app = express();

const port = 3000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🔥`);
});
