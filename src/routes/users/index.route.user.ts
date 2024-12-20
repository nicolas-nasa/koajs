import middlewares from '@middleware/index.middleware';
import KoaRouter from 'koa-router';

import { ZodValidator } from 'koa-router-zod-swagger';
import { z } from 'zod';

export const userRoutes = new KoaRouter();

userRoutes.prefix('/users');

userRoutes.get(
  '/me',
  ZodValidator({
    summary: 'User me route',
    description: `This used to show actual logged user`,
    header: z.object({
      token: z.string().optional()
    }),
    response: {
      possibleStatusCodes: [200],
      description: 'Response returned successfully',
      body: z.object({})
    }
  }),
  (ctx, next) => middlewares.authMiddleware.authenticate(ctx, next),
  (ctx) => {
    ctx.status = 200;
    ctx.body = { status: ctx.user };
  }
);

userRoutes.post(
  '/auth',
  ZodValidator({
    summary: 'User auth route',
    description: `create or autenticate user`,
    body: z.object({
      name: z.string()
    }),
    response: {
      description: 'Response returned successfully',
      body: z.object({})
    }
  }),
  (ctx) => {
    ctx.status = 200;
    ctx.body = { status: 'success' };
  }
);

userRoutes.patch(
  '/edit-account',
  ZodValidator({
    summary: 'User edit account route',
    description: `This used edit logged user`,
    response: {
      description: 'Response returned successfully',
      validate: true,
      body: z.object({})
    }
  }),
  (ctx, next) => middlewares.authMiddleware.authenticate(ctx, next),
  (ctx) => {
    ctx.status = 200;
    ctx.body = { status: 'success' };
  }
);

userRoutes.get(
  '/users',
  ZodValidator({
    summary: 'User get route',
    description: `This used to list all users to adm logged`,
    response: {
      description: 'Response returned successfully',
      validate: true,
      body: z.object({})
    }
  }),
  (ctx, next) => middlewares.authMiddleware.authenticate(ctx, next),
  (ctx) => {
    ctx.status = 200;
    ctx.body = { status: 'success' };
  }
);
