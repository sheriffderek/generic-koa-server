import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
// import Router from 'koa-router';

import config from './config/app';
import router from './routes/index';

const app = new Koa();

app.use( logger() );
app.use( cors() );
app.use( bodyParser() );

// const router = new Router();

// router.get('/', async (ctx)=> {
//   ctx.body = {
//     status: 'ok /',
//   };
// });

app.use( router.allowedMethods() );
app.use( router.routes() );

app.listen(config.port, ()=> {
  console.log(`Server running on ${config.port}`);
});
