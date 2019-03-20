export default async (ctx, next)=> {

  try {
    await next();
  } catch(error) {
    ctx.status = 500;
    ctx.body = {
      errors: [
        {
          code: 500,
          title: 'Internal server error',
          detail: error.message,
        },
      ],
    };
  }

}