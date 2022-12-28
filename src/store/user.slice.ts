import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'
import {IUser} from '../types/models'


const initialState: IUser = {
	email: '',
	_id: '',
	days: [],
	settings: {
		theme: 'dark',
		language: 'en',
	},
}

export const userSlice = createSlice({
  name: 'user', 
  initialState,
  reducers: {
	  
  },
})

export const {  } = userSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer
