import { createSlice } from '@reduxjs/toolkit'
import { AddItem, PopItem } from '../actions/list'

// export function changeList(state = [], { type, payload }) {
//   console.log('changelist', type, payload)
//   switch (type) {
//     case AddItem:
//     // return [...state, payload.item]

//     case PopItem:
//       state.pop()
//     // return state

//     default:
//     // return state
//   }
// }

export const changeListSlice = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload.item)
    },
    popItem: (state, action) => {
      state.pop()
    },
  },
})

export const { reducer: changeList } = changeListSlice
