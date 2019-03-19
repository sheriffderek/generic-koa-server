import Router from 'koa-router';
import status from './status';
import thing from './thing';

const router = new Router();

router.use('/', status);
router.use('/things', thing);

export default router;