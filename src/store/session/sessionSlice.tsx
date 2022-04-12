import { createSlice } from '@reduxjs/toolkit'
import { initialUser } from '../../app/login'


export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
      value: initialUser(),
    },
    reducers: {
      setSession : (state, action) => {
        state.value = action.payload
      },
    },
  })
  
// Action creators are generated for each case reducer function
export const { setSession } = sessionSlice.actions

export default sessionSlice.reducer