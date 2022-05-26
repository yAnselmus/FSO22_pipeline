import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchInput: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAnecdotes(state, action) {
      return ({
          searchInput: action.payload
      })
    },
  },
})

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer