import KoaRouter from 'koa-router'
import { userRoutes } from './users/index.route.user'
const router = new KoaRouter()

router.prefix('/api')

router.use(userRoutes.routes())

export default router
