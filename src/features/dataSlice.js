import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: null,
  date: null
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // ADD NEW DATA TO DATABASE
    setNewBalance: (state, action) => {
      state.balance = action.payload.balance
      state.date = action.payload.date
    }
  }
});

export const { setNewBalance } = dataSlice.actions

export const selectBalance = state => state.data.balance
export const selectDate = state => state.data.date

export default dataSlice.reducer