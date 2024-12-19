import KoaRouter from 'koa-router'

import { ZodValidatorProps, ZodValidator } from 'koa-router-zod-swagger'
import { z } from 'zod'

export const userRoutes = new KoaRouter()

userRoutes.prefix('/users')

userRoutes.get(
  '/me',
  ZodValidator({
    summary: 'User get route',
    description: `This used to show actual logged user`,
    response: {
      description: 'Response returned successfully',
      validate: true,
      body: z.object({})
    }
  }),
  (ctx) => {
    ctx.status = 200
    ctx.body = { status: 'success' }
  }
)

userRoutes.post(
  '/auth',
  ZodValidator({
    summary: 'User get route',
    description: `This used to show actual logged user`,
    response: {
      description: 'Response returned successfully',
      validate: true,
      body: z.object({})
    }
  }),
  (ctx) => {
    ctx.status = 200
    ctx.body = { status: 'success' }
  }
)

userRoutes.patch(
  '/edit-account',
  ZodValidator({
    summary: 'User get route',
    description: `This used to show actual logged user`,
    response: {
      description: 'Response returned successfully',
      validate: true,
      body: z.object({})
    }
  }),
  (ctx) => {
    ctx.status = 200
    ctx.body = { status: 'success' }
  }
)

userRoutes.get(
  '/users',
  ZodValidator({
    summary: 'User get route',
    description: `This used to show actual logged user`,
    response: {
      description: 'Response returned successfully',
      validate: true,
      body: z.object({})
    }
  }),
  (ctx) => {
    ctx.status = 200
    ctx.body = { status: 'success' }
  }
)
