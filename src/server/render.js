import ReactDom from 'react-dom/server'
import React from 'react'
import getScripts from './getScripts'
import App from './App'
import store from '../store'
import { routerConfig } from '../routes/config'

export default async (req, res) => {
  const str = ReactDom.renderToString(<App path={req.path} />)

  const route = routerConfig.find((route) => route.path === req.path)
  const comp = route && route.comp
  if (comp && comp.loadData) {
    console.log('fetch first server')
    await comp.loadData(store, { text: '测试字符串' })
  }
  const initialState = JSON.stringify(store.getState())

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="root">${str}</div>
        <script>
          window.__initialState = ${initialState}
        </script>
        ${getScripts()}
      </body>
    </html>
  `
  res.send(html)
}
