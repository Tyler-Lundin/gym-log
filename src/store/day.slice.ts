import { createSlice } from '@reduxjs/toolkit';
import getDayThunk from './thunks/getDay.thunk';

export interface DayState {
    dayId: string;
    exercises: string[] | [];
    date: {
        month: number;
        day: number;
        year: number;
    };
    isLoading: boolean;
    isError: boolean;
    message: string ;
};

const initialState: DayState = {
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
        setDate: (state, action) => {
            state.date = action.payload;
        },
        tomorrow: (state) => {
            const { month, day, year } = state.date;
            const date = new Date(year, month - 1, day + 1);
            state.date = {
                month: date.getMonth() + 1,
                day: date.getDate(),
                year: date.getFullYear(),
            };
        },
        yesterday: (state) => {
            const { month, day, year } = state.date;
            const date = new Date(year, month - 1, day - 1);
            state.date = {
                month: date.getMonth() + 1,
                day: date.getDate(),
                year: date.getFullYear(),
            };
        },
        today: (state) => {
            state.date = {
                month: new Date().getMonth() + 1,
                day: new Date().getDate(),
                year: new Date().getFullYear(),
            };
        }
	},
    extraReducers: (builder) => {
        builder.addCase(getDayThunk.fulfilled, (state, action) => {
            const { dayId, exercises, message } = action.payload;
            state.dayId = dayId;
            state.exercises = exercises;
            state.message = message;
            state.isError = false;
            state.isLoading = false;

        });

        builder.addCase(getDayThunk.pending, (state) => {
            state = { ...state, ...loadingState };
        });

        builder.addCase(getDayThunk.rejected, (state, action) => {
            const { message } = action.payload;
            state.message = message;
            state.isError = true;
            state.isLoading = false;
        });
    },
});

export const selectEvents = (state: any) => state.day.events;
export const selectDate = (state: any) => state.day.date;

export const {
    reset,
    resetLoading,
    resetError,
    resetMessage,
    setDate,
    tomorrow,
    yesterday,
    today,
} = daySlice.actions;

export default daySlice.reducer;


