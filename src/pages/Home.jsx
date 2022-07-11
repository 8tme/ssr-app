import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [state, setState] = useState(1)

  return (
    <div style={{ color: 'red' }}>
      测试首页{state}
      <button onClick={() => setState(state + 1)}>点击</button>
    </div>
  )
}

export default Home
