
import { createSlice } from '@reduxjs/toolkit';
import { Day } from '../types/index';


const initialState = {
    day:1,
};

const daySlice = createSlice({
	name: 'day',
	initialState,
	reducers: {
		setDate(state, action) {
			state.date = action.payload;
		},
		addEvent(state, action) {
			state.events.push(action.payload);
		},
		removeEvent(state, action) {
			state.events = state.events.filter((event) => event.time !== action.payload);
		}
	}
});

export const selectEvents = (state: any) => state.day.events;
export const selectDate = (state: any) => state.day.date;

export const { setDate, addEvent, removeEvent } = daySlice.actions;

export default daySlice.reducer;


