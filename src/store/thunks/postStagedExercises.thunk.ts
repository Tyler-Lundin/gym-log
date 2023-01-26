import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";
import PostStagedExercises, { ErrorResponse, SuccessResponse } from "../../api/postStagedExercises.api";
import { closeAddExercise } from "../app.slice";
import { resetStagedExercises } from "../exercise.slice";

interface ThunkConfig {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: ErrorResponse;
}

const postStagedExercisesThunk = createAsyncThunk<
    SuccessResponse, // returned value
    void, // argument
    ThunkConfig // configs
>('exercise/postStagedExercises', async (_, { getState, rejectWithValue, fulfillWithValue, dispatch }) => {
    const { stagedExercises } = getState().exercise;
    const { headers } = getState().auth;

    const response = await PostStagedExercises(stagedExercises, headers);

    if (response.isError) return rejectWithValue(response);
    dispatch( resetStagedExercises() );
    dispatch( closeAddExercise() );
    return fulfillWithValue(response);

});

export default postStagedExercisesThunk;

