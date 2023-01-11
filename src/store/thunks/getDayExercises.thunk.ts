import { createAsyncThunk } from '@reduxjs/toolkit';
import { IExercise } from '../../types';
import { RootState, AppDispatch } from '..';
import getDayExercises from '../../api/getDayExercises.api';

type H = {
    [key: string]: string | number;
};

export type R = {
    exercises: IExercise[] | [];
    message: string;
    isLoading: boolean;
    isError: boolean;
};


const getDayExercisesThunk = createAsyncThunk<
R,
H,
{ dispatch: AppDispatch, state: RootState, rejectValue: R }
>( 'getDayExercises', async (headers, thunkAPI) => {
    const payload = {
        exercises: [],
        message: 'Error fetching day',
        isError: false,
        isLoading: false,
    };
    try {
        const { dayId } = thunkAPI.getState().day;
        if (!dayId) return thunkAPI.rejectWithValue({ ...payload, message: 'Something went wrong fetching day exercises!', isError: true } as R);
        const { isError, message, exercises } = await getDayExercises(dayId, headers);
        if (isError) return thunkAPI.rejectWithValue({ ...payload, message, isError: true } as R);
        return thunkAPI.fulfillWithValue({ ...payload, exercises, message } as R);
    } catch (error:any) {
        console.log(error);
        return thunkAPI.rejectWithValue({ ...payload, message: error.message || 'Something went wrong fetching day exercises!', isError: true } as R);
    }
});

export default getDayExercisesThunk;
