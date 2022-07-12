import { changeNum } from './num'
import { changeList } from './list'
import { combineReducers } from 'redux'

export default combineReducers({
  num: changeNum,
  list: changeList,
})
