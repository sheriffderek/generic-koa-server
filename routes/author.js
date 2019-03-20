import Router from 'koa-router';

const router = new Router();

const serialize = (model)=> {
  return {
    type: "authors",
    id: model.id,
    attributes: {
      first: model.first,
      last: model.last,
    },
  };
};

router.get('/', async (ctx)=> {
  try {
    const authors = await ctx.app.db.Author.findAll();
    ctx.body = { data: authors.map(serialize) };
  } catch (error) {
    console.log('e', error);
  }
});

router.post('/', async (ctx)=> {
  const attrs = ctx.request.body.data.attributes;
  const author = await ctx.app.db.Author.create(attrs);
  ctx.body = author;
});

export default router.routes();