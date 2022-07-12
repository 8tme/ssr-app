import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import { connect } from 'react-redux'
import { Decrease, getIncreaseAction, Increase } from '../store/actions/num'

const Home = ({ num, decrease, increase }) => {
  const [state, setState] = useState(1)

  return (
    <div style={{ color: 'red' }}>
      测试首页sdasdas{num}
      <button onClick={decrease}>点击-</button>
      <button onClick={increase}>点击+</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    num: state.num,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(getIncreaseAction()),
    decrease: () => dispatch(getIncreaseAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
