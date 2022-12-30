import { createAsyncThunk } from "@reduxjs/toolkit";
import postExercise from '../../api/postExercise.api';
import { Exercise, H, R } from '../../types';
import { RootState, AppDispatch } from "..";

//const getDayThunk = createAsyncThunk< R, H, { dispatch: AppDispatch, state: RootState, rejectValue: R } >(
/*
    *
    dayId: string,
    time: string;
    tags: { label: string; color: string; }[];
    exercise: string;
    weight: number | string;
    reps: number | string;
    *
*/


const postExerciseThunk = createAsyncThunk<R, H, { state: RootState, dispatch: AppDispatch, rejectValue: R }>(
    'exercise/postExercise',
    async (headers:H, thunkAPI) => {
        const { dayId, time, tags, exercise, weight, reps } = thunkAPI.getState().exercise.newExercise;
        const response = await postExercise({ dayId, time, tags, exercise, weight, reps }, headers);
        if (response.isError) return thunkAPI.rejectWithValue(response);
        return response.exercise;

    }
);

export default postExerciseThunk;



