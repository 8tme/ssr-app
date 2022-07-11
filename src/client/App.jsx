import React, { useState } from 'react'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

import Routerapp from '../routes/RouterApp'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routerapp />
      </BrowserRouter>
    </>
  )
}

export default App
