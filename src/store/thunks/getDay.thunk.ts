import {createAsyncThunk} from "@reduxjs/toolkit";
import getDay from '../../api/getDay.api';
import { RootState, AppDispatch } from "..";

type H = {
    [key: string]: string | number;
};
type R = {
    dayId: string;
    exercises: string[] | [];
    message: string;
    isLoading: boolean;
    isError: boolean;
};

const getDayThunk = createAsyncThunk< R, H, { dispatch: AppDispatch, state: RootState, rejectValue: R } >(
    'getDay',
    async (headers, thunkAPI) => {
        try {
            const { month, day: dayNum, year } = thunkAPI.getState().day.date;
            if (!month || !dayNum || !year) return thunkAPI.rejectWithValue({ dayId: '', exercises: [], message: 'Something went wrong fetching day!', isLoading: false, isError: true });
            const { isError, message, day } = await getDay(month, dayNum, year, headers);

            if (isError) return thunkAPI.rejectWithValue({ message, isError: true, isLoading: false, dayId: '', exercises: [] });
            if (!day) return thunkAPI.rejectWithValue({ message: 'Day not found!', isError: true, isLoading: false, dayId: '', exercises: [] });

            const { exercises = [], _id = '' } = day;

            return thunkAPI.fulfillWithValue({
                dayId: _id,
                exercises,
                message,
                isLoading: false,
                isError: false,
            });

        } catch (error: any) {
            return thunkAPI.rejectWithValue({ message: error.message || 'Something went wrong fetching day!', isError: true, isLoading: false, dayId: '', exercises: [] });
        }
	}
);

export default getDayThunk;
