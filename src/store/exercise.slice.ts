import { createSlice } from '@reduxjs/toolkit';
import { IExercise } from '../types';
import getDayExercisesThunk from './thunks/getDayExercises.thunk';
import postExerciseThunk from './thunks/postExercise.thunk';

type IExerciseState = {
    newExercise: {
        dayId: string,
        time: string;
        tags: { label: string; color: string; }[];
        exercise: string;
        weight: number;
        reps: number;
        formDidSubmit: boolean;
        formStep: number;
    };
    newTag: {
        label: string;
        color: string; // TODO: change color -> theme ?
    };
    stagedExercises: IExercise[];
    exercises: IExercise[] | [];
    isLoading: boolean;
    isError: boolean;
    message: string;
};

const initialState: IExerciseState = {
    newExercise: {
        dayId: '',
        time: '',
        tags: [],
        exercise: '',
        weight: 0,
        reps: 0,
        formDidSubmit: false,
        formStep: 0,
    },
    newTag: {
        label: '',
        color: '',
    },
    stagedExercises: [],
    exercises: [],
    isLoading: false,
    isError: false,
    message: '',
}

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        resetExerciseState: () => initialState,
        resetLoading: (state) => state = { ...state, isLoading: false },
        resetError: (state) => state = { ...state, isError: false },
        resetMessage: (state) => state = { ...state, message: '' },
        setDayId: (state, action) => state = { ...state, newExercise: { ...state.newExercise, dayId: action.payload } },
        setTime: (state, action) => state = { ...state, newExercise: { ...state.newExercise, time: action.payload } },
        setTags: (state, action) => state = { ...state, newExercise: { ...state.newExercise, tags: action.payload } },
        setExercise: (state, action) => state = { ...state, newExercise: { ...state.newExercise, exercise: action.payload } },
        setWeight: (state, action) => state = { ...state, newExercise: { ...state.newExercise, weight: action.payload } },
        setReps: (state, action) => state = { ...state, newExercise: { ...state.newExercise, reps: action.payload } },
        setFormDidSubmit: (state, action) => state = { ...state, newExercise: { ...state.newExercise, formDidSubmit: action.payload } },
        setFormStep: (state, action) => state = { ...state, newExercise: { ...state.newExercise, formStep: action.payload } },
        addStagedExercise: (state,action) => state = { ...state, stagedExercises: [...state.stagedExercises, action.payload] },
        removeStagedExercise: (state,action) => { state.stagedExercises.splice(action.payload, 1); },
        resetStagedExercises: (state) => state = { ...state, stagedExercises: [] },
        setNewTagLabel: (state, action) => state = { ...state, newTag: { ...state.newTag, label: action.payload } },
        setNewTagColor: (state, action) => state = { ...state, newTag: { ...state.newTag, color: action.payload } },
        addTagToStagedExercise: (state, action) => {
            const { index } = action.payload;
            const { label, color } = state.newTag;
            const tag = { label, color };
            state.stagedExercises[index].tags.push(tag);
        },
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
        builder.addCase(getDayExercisesThunk.rejected, (state, action) => {
            const { message = 'Error getting exercises!' } = action.payload as { message: string, isError: boolean, isLoading: boolean };
            state.message = message;
            state.isError = true;
            state.isLoading = false;
        });

        builder.addCase(postExerciseThunk.fulfilled, (state, action) => {
            const { message } = action.payload;
            state.exercises = [...state.exercises, action.payload.exercise];
            state.message = message;
            state.isError = false;
            state.isLoading = false;
        });
        builder.addCase(postExerciseThunk.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(postExerciseThunk.rejected, (state, action) => {
            const { message = 'Error posting exercise!' } = action.payload as { message: string, isError: boolean };
            state.message = message;
            state.isError = true;
            state.isLoading = true;
        });

    }
});

export const selectExercises = (state: any) => state.exercise.exercises;

export const {
    resetExerciseState,
    resetLoading,
    resetError,
    resetMessage,
    setDayId,
    setTime,
    setTags,
    setExercise,
    setWeight,
    setReps,
    setFormDidSubmit,
    setFormStep,
    addStagedExercise,
    removeStagedExercise,
    setNewTagLabel,
    setNewTagColor,
    resetStagedExercises,
} = exerciseSlice.actions;

export default exerciseSlice.reducer;

