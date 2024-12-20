import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import logger from 'koa-logger';
import { KoaRouterSwagger } from 'koa-router-zod-swagger';
import router from '@route/route';
import { AppDataSource } from '@infrastructure/db.infrastructure';

const app = new Koa();

app.use(bodyParser());
app.use(
  cors({
    origin: '*'
  })
);

app.use(logger());

//Documentations Swagger
app.use(
  KoaRouterSwagger(router, {
    routePrefix: 'docs',
    title: 'documentation',
    hideTopbar: true,
    swaggerOptions: {
      spec: {
        info: {
          version: '1.0.0',
          description: 'This is test api specs'
        }
      }
    }
  })
);

AppDataSource.initialize();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
