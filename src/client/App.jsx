import React, { useState } from 'react'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routerapp from '../routes/RouterApp'
import store from '../store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routerapp />
      </BrowserRouter>
    </Provider>
  )
}

export default App
