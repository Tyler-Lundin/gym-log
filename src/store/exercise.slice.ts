import { createSlice } from '@reduxjs/toolkit';
import { Exercise } from '../types';
import getDayExercisesThunk from './thunks/getDayExercises.thunk';
import postExerciseThunk from './thunks/postExercise.thunk';

type ExerciseState = {
    newExercise: {
        dayId: string,
        time: string;
        tags: { label: string; color: string; }[];
        exercise: string;
        weight: number;
        reps: number;
    };
    exercises: Exercise[] | [];
    isLoading: boolean;
    isError: boolean;
    message: string;
};

const initialState: ExerciseState = {
    newExercise: {
        dayId: '',
        time: '',
        tags: [],
        exercise: '',
        weight: 0,
        reps: 0,
    },
    exercises: [],
    isLoading: false,
    isError: false,
    message: '',
}

const loadingState = {
    isLoading: true,
    isError: false,
    message: '',
}

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        reset: () => initialState,
        resetLoading: (state) => state = { ...state, isLoading: false },
        resetError: (state) => state = { ...state, isError: false },
        resetMessage: (state) => state = { ...state, message: '' },
    },
    extraReducers: (builder) => {
        builder.addCase(getDayExercisesThunk.fulfilled, (state, action) => {
            const { exercises, message } = action.payload;
            state.exercises = exercises;
            state.message = message;
            state.isError = false;
            state.isLoading = false;
        });
        builder.addCase(getDayExercisesThunk.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        // todo: fix the types on rejected not infering, ( as in I gave up on trying to type this out properly )
        builder.addCase(getDayExercisesThunk.rejected, (state, action) => {
            const { message = 'Error getting exercises!' } = action.payload as { message: string, isError: boolean, isLoading: boolean };
            state.message = message;
            state.isError = true;
            state.isLoading = true;
        });


        builder.addCase(postExerciseThunk.fulfilled, (state, action) => {
            const { message } = action.payload;
            state.message = message;
            state.isError = false;
            state.isLoading = false;
        });
    }
});

export const selectExercises = (state: any) => state.exercise.exercises;
export const { reset, resetLoading, resetError, resetMessage } = exerciseSlice.actions;

export default exerciseSlice.reducer;

