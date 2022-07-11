import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Ad from '../pages/Ad'
import Home from '../pages/home'
import List from '../pages/List'
import NotFound from '../pages/NotFound'

const Routerapp = () => {
  return (
    <>
      <Link to="/ad">广告</Link>
      <Link to="/list">列表</Link>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/ad'} element={<Ad />} />
        <Route path={'/list'} element={<List />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default Routerapp
