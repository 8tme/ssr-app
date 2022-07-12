import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import render from './render'

const app = express()

app.use(express.static('./public'))

app.use(
  '/repos',
  createProxyMiddleware({
    target: 'https://api.github.com/users/8tme',
    changeOrigin: true,
  })
)

app.get('*', render)

app.listen(8080, () => {
  console.log('server start')
})
