import {Router} from 'express';
import pixRouter from './pix.routes';
import postRouter from './post.routes';
import userRouter from './user.routes';

const routes = Router()

routes.use('/post', postRouter)
routes.use('/user', userRouter)
routes.use('/pix', pixRouter)

export default routes;