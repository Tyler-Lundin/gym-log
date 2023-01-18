import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import PostStagedExercises, { ErrorResponse, SuccessResponse } from "../../api/postStagedExercises.api";

interface ThunkConfig {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: ErrorResponse;
}

const postStagedExercisesThunk = createAsyncThunk<
    SuccessResponse, // returned value
    undefined, // first argument
    ThunkConfig // configs
>('exercise/postStagedExercises', async (_, { getState, rejectWithValue, fulfillWithValue }) => {
    const { stagedExercises } = getState().exercise;
    const { headers } = getState().auth;

    const response = await PostStagedExercises(stagedExercises, headers);

    if (response.isError) return rejectWithValue(response);
    return fulfillWithValue(response);

});

export default postStagedExercisesThunk;

