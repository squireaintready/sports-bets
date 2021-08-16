import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uid: null,
  userName: null,
  userEmail: null,
  photoURL: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.uid = action.payload.uid
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
      state.photoURL = action.payload.photoURL
    },
    setUserLogOutState: state => {
      state.userName = ''
      state.userEmail = ''
    }
  }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions

export const selectUid = state => state.user.Uid
export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectphotoURL = state => state.user.photoURL

export default userSlice.reducer