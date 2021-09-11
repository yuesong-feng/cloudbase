const Koa = require('koa');
const app = new Koa();

const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const router  = require('./routes');


app.use(bodyparser()).use(cors()).use(router.allowedMethods()).use(router.routes());

module.exports = app;