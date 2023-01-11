import { createAsyncThunk } from '@reduxjs/toolkit';
import {RootState} from '..';
import Register from '../../api/register.api';

interface ResponsePayload {
    message: string;
    redirect: string;
    authToken: string;
    sessionToken: string;
}

const registerThunk = createAsyncThunk<ResponsePayload, void, { state: RootState }>(
	'auth/register',
	async (_, thunkAPI) => {
        let payload:ResponsePayload = {
            message: 'Error Registering User',
            redirect: '',
            authToken: '',
            sessionToken: '',
        }

		try {
			const formData = thunkAPI.getState().auth.formData;
			const { username, email, password } = formData;
			const response = await Register({ username, email, password });
			if (!response) return thunkAPI.rejectWithValue(payload);
            const { message, redirect, authToken, sessionToken } = response;
            payload = { message, redirect, authToken, sessionToken };
            return payload;
		} catch (error:any) {
            payload.message = error.response.data.message || 'Error Registering User';
            payload.redirect = error.response.data.redirect || '';
			return thunkAPI.rejectWithValue( payload );
		}
	}
);

export default registerThunk;
