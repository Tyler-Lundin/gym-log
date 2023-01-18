import { createAsyncThunk } from "@reduxjs/toolkit";
import postExercise, { PostExerciseResponse, ErrorResponse, SuccessResponse } from '../../api/postExercise.api';
import { RootState, AppDispatch } from "..";

interface ThunkConfig {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: any;
}

const postExerciseThunk = createAsyncThunk<
    PostExerciseResponse, // returned value
    undefined, // first argument
    ThunkConfig // configs
>('exercise/postExercise', async (_, { getState, rejectWithValue, fulfillWithValue }) => {
        const { newExercise } = getState().exercise;
        const { dayId } = getState().day;
        const { headers } = getState().auth;
        try {
            const responsePayload = await postExercise({...newExercise, dayId }, headers);
            if (responsePayload.isError) return rejectWithValue(responsePayload as ErrorResponse);
            return fulfillWithValue(responsePayload as SuccessResponse);
        } catch (error:any) {
            return { isError: true, message: error.message };
        }
    }
);


export default postExerciseThunk;
