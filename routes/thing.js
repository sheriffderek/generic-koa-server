import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx)=> {
  try {
    const things = await ctx.app.db.Thing.findAll();
    ctx.body = things;
  } catch (error) {
    console.log('e', error);
  }
});

router.post('/', async (ctx)=> {

    const attrs = ctx.request.body.data.attributes;
    const thing = await ctx.app.db.Thing.create(attrs);
    ctx.body = thing;

  try {
    
  }
  catch(error) {
    console.log('/things', error);
  }

});

export default router.routes();