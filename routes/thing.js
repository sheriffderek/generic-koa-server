import Router from 'koa-router';
import Thing from './thing';
const router = new Router();

router.get('/', async(ctx)=> {
  const things = await ctx.app.db.Thing.findAll();

  ctx.body = things;
});

router.post('/', async(context)=> {
  const attributes = context.request.body.data.attributes;
  // at this stage - use insomnia or postman to try this out... 

  /*
  {
    "data": {
      "type": "things",
      "attributes": {
        "first": 'hi',
        "there": 'there'
      }
    }
  }
  */

  context.body = attributes;
});

export default router.routes();