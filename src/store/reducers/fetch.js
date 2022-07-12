import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getData } from '../../services'

export const fetchRepoInfo = createAsyncThunk(
  'user/fetchRepoInfo',
  async (params, { dispatch, getState }) => {
    const res = await getData()
    dispatch({
      type: 'user/setInfo',
      payload: res.data,
    })
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: [],
  },
  reducers: {
    setInfo: (state, action) => {
      // console.log(state, action, 'state action')
      state.info = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepoInfo.fulfilled, (state, action) => {
      console.log(
        state.map((it) => it.name),
        action,
        'state action'
      )
      // state.info =
    })
  },
})
