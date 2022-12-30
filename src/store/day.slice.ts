import { createSlice } from '@reduxjs/toolkit';
import getDayThunk from './thunks/getDay.thunk';

const initialState = {
    dayId: '',
    exercises: [] as string[] | [],
    date: {
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
        year: new Date().getFullYear(),
    },
    message: '',
    isLoading: false,
    isError: false,
};

const loadingState = {
    message: '',
    isLoading: true,
    isError: false,
};


const daySlice = createSlice({
	name: 'day',
	initialState,
	reducers: {
        reset: () => initialState,
        resetLoading: (state) => state = { ...state, isLoading: false },
        resetError: (state) => state = { ...state, isError: false },
        resetMessage: (state) => state = { ...state, message: '' },
	},
    extraReducers: (builder) => {
        builder.addCase(getDayThunk.fulfilled, (state, action) => {
            const { dayId, exercises, message, isError, isLoading } = action.payload;
            state.dayId = dayId;
            state.exercises = exercises;
            state.message = message;
            state.isError = isError;
            state.isLoading = isLoading;

        });

        builder.addCase(getDayThunk.pending, (state) => {
            state = { ...state, ...loadingState };
        });

        builder.addCase(getDayThunk.rejected, (state, action) => {
            const { message = 'Error getting day!', isError = true, isLoading = false } = action.payload;
            state.message = message;
            state.isError = isError;
            state.isLoading = isLoading;
        });
    },
});

export const selectEvents = (state: any) => state.day.events;
export const selectDate = (state: any) => state.day.date;

export const { reset, resetLoading, resetError, resetMessage } = daySlice.actions;

export default daySlice.reducer;


