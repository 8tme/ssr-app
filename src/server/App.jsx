import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import Routerapp from '../routes/RouterApp'
import store from '../store'
import { routerConfig } from '../routes/config'

const App = ({ path }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={path}>
        <Routerapp />
      </StaticRouter>
    </Provider>
  )
}

export default App
