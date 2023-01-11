import {createAsyncThunk} from "@reduxjs/toolkit";
import getDay from '../../api/getDay.api';
import { RootState, AppDispatch } from "..";

type R = {
    dayId: string;
    exercises: string[] | [];
    message: string;
};

const getDayThunk = createAsyncThunk< R, undefined, { dispatch: AppDispatch, state: RootState, rejectValue: R } >(
    'getDay',
    async (_, { getState, rejectWithValue, fulfillWithValue }) => {
        const { month, day: dayNum, year } = getState().day.date;
        const { headers } = getState().auth;
        if (!month || !dayNum || !year) return rejectWithValue({ message: 'Invalid Date', dayId: '', exercises: [] });
        const { isError, message, day } = await getDay(month, dayNum, year, headers);

        if (isError) return rejectWithValue({ message, dayId: '', exercises: [] });
        if (!day) return rejectWithValue({ message: 'Day not found!', dayId: '', exercises: [] });

        const { exercises = [], _id = '' } = day;

        return fulfillWithValue({
            dayId: _id,
            exercises,
            message,
        });
	}
);

export default getDayThunk;
