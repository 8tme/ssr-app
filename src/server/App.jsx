import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import Routerapp from '../routes/RouterApp'

const App = ({ path }) => {
  return (
    <StaticRouter location={path}>
      <Routerapp />
    </StaticRouter>
  )
}

export default App
