import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (_, res) => {
  const user = await User.create({
    name: 'Yuri Barros',
    email: 'yuri2@yuri.com',
    password_hash: '123456',
  });

  res.json(user);
});

module.exports = routes;
