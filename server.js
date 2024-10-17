/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const next = require('next');
const app = express();

const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.use(json());
  app.get('*', (req, res) => handle(req, res));
  app.listen(3000, () => console.log('Server running on port 3000'));
});
