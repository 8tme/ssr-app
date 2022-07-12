// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// const store = createStore(rootReducer, composedEnhancer)
// export default store

import { createSlice, configureStore } from '@reduxjs/toolkit'
import { isServer } from '../services'
import { PopItem } from './actions/list'
import reducers from './reducers'
import { userSlice } from './reducers/fetch'
import { changeList } from './reducers/list'
import { changeNum } from './reducers/num'

const store = configureStore({
  reducer: {
    num: changeNum,
    list: changeList,
    user: userSlice.reducer,
  },
  middleware: (getDeafaultMiddleware) =>
    getDeafaultMiddleware({
      serializableCheck: false,
    }),

  preloadedState: isServer ? undefined : window.__initialState,
})

export default store
