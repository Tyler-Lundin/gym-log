import { createAsyncThunk } from "@reduxjs/toolkit";
import postExercise, { returnError, returnSuccess } from '../../api/postExercise.api';
import { RootState, AppDispatch } from "..";
// import { IExercise } from "../../types";


const postExerciseThunk = createAsyncThunk<
    any, // returned value
    undefined, // first argument
    { state: RootState, dispatch: AppDispatch, rejectValue: any } // configs
>('exercise/postExercise', async (_, { getState, rejectWithValue, fulfillWithValue }) => {
        const { newExercise } = getState().exercise;
        const { dayId } = getState().day;
        const { headers } = getState().auth;
        try {
            const responsePayload = await postExercise({...newExercise, dayId }, headers);
            if (responsePayload.isError) return rejectWithValue(responsePayload);
            return fulfillWithValue(responsePayload);
        } catch (error:any) {
            return { isError: true, message: error.message, exercise: [] };
        }
    }
);


export default postExerciseThunk;
