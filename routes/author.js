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
    link: {
      self: `/authors/${model.id}`,
    },
  };
};

router.get('/', async (ctx)=> {
  try {
    const authors = await ctx.app.db.Author.findAll();
    ctx.body = { data: authors.map(serialize) };
  } catch (error) {
    ctx.body = `something is not cool...`;
  }
});

router.get('/:id', async (ctx)=> {
  const id = ctx.params.id;
  try {
    const author = await ctx.app.db.Author.findByPk(id);
    ctx.body = {
      data: serialize(author),
    };
  } catch(error) {
    ctx.body = `An id of ${id} could not be found: ${error}`;
  }
});

router.post('/', async (ctx)=> {
  const attrs = ctx.request.body.data.attributes;
  const author = await ctx.app.db.Author.create(attrs);

  ctx.status = 201;
  ctx.set('Location', `/authors/${author.id}`);

  ctx.body = {
    data: serialize(author),
  };
});


router.patch('/:id', async (ctx)=> {
  const attrs = ctx.request.body.data.attributes;
  const id = ctx.params.id;
  
  try {
    const author = await ctx.app.db.Author.findByPk(id);
    author.set(attrs);
    await author.save();
    ctx.body = {
      data: serialize(author),
    };
  } catch(error) {
    ctx.body = `An id of ${id} could not be found?: ${error}`;
  }
});

router.del('/:id', async (ctx)=> {
  const id = ctx.params.id;
  const author = await ctx.app.db.Author.findByPk(id);
  await author.destroy();
  ctx.status = 204;
  ctx.body = null;
});


export default router.routes();