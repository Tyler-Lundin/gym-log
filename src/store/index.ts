import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user.slice';
import authSlice from './auth.slice';
//import daySlice from './day.slice';
import appSlice from './app.slice';

export const store = configureStore({
  reducer: {
	  user: userSlice,
	  auth: authSlice,
//	  day: daySlice,
	  app: appSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectUser = (state: RootState) => state.user;
export const selectAuth = (state: RootState) => state.auth;
