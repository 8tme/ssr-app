import ReactDom from 'react-dom/server'
import React from 'react'
import getScripts from './getScripts'
import App from './App'

export default (req, res) => {
  const str = ReactDom.renderToString(<App path={req.path} />)

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
        ${getScripts()}
      </body>
    </html>
  `
  res.send(html)
}
