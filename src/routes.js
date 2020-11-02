const { Router } = require('express');
const routes = new Router();

routes.get( '/', (_, res) => res.json({ message: "Hello Word" }) );

module.exports = routes;
