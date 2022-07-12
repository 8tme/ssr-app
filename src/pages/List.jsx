import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { isServer } from '../services'
import store from '../store'
import { getAddAction, getPopAction } from '../store/actions/list'
import { fetchRepoInfo } from '../store/reducers/fetch'

const List = ({ user, list, addItem, popItem, fetchData }) => {
  useEffect(() => {
    console.log(window.__initialState, '__initailstae', store.getState())
    if (!window.__initialState) {
      console.log('fetch first client', window.__initialState)
      fetchData({ text: '测试参数' })
    }
  }, [])

  return (
    <div>
      列表页Sdjopapj
      {user.info?.map((it) => (
        <div key={it.id}>{it.name}</div>
      ))}
      <button onClick={() => addItem({ item: Math.random() })}>add</button>
      <button onClick={popItem}>delete</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    list: state.list,
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (payload) => dispatch(getAddAction(payload)),
    popItem: (payload) => dispatch(getPopAction(payload)),
    fetchData: (payload) => dispatch(fetchRepoInfo(payload)),
  }
}

const WrappedList = connect(mapStateToProps, mapDispatchToProps)(List)
WrappedList.loadData = async (store, payload) => {
  return await store.dispatch(fetchRepoInfo(payload))
}

export default WrappedList
