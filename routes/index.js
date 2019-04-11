import Router from 'koa-router';
import status from './status';
import thing from './thing';
import author from './author';

const router = new Router();

router.use('/', status);
router.use('/authors', author);

export default router;