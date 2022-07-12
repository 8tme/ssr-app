import { Decrease, Increase } from '../actions/num'

export function changeNum(state = 10, action) {
  switch (action.type) {
    case Decrease:
      return state - 1

    case Increase:
      return state + 1

    default:
      return state
  }
}
