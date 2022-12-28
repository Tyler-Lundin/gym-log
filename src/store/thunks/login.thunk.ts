import { createAsyncThunk } from '@reduxjs/toolkit';
import {RootState} from '..';

import Login from '../../api/login.api';

interface ResponsePayload {
	sessionToken: string;
	message: string;
	authToken: string;
}


export const loginThunk = createAsyncThunk<ResponsePayload, void, { state: RootState }>(
	'auth/login',
	async (_, thunkAPI) => {
        let payload:ResponsePayload = {
            message: 'Error logging in User',
            sessionToken: '',
            authToken: '',
        }

		try {
			const formData = thunkAPI.getState().auth.formData;
			const { email, password } = formData;
			const response = await Login({ email, password });
			if (!response) return thunkAPI.rejectWithValue( payload );
			return response
		} catch (error:any) {
            payload.message = error.response.data.message || 'Error Registering User';
			return thunkAPI.rejectWithValue( payload );
		}
	}
);





