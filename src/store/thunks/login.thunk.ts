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
			const { email, password, rememberMe } = formData;
			const response = await Login({ email, password, rememberMe });
			if (!response) return thunkAPI.rejectWithValue( payload );
            if (rememberMe) {
                const thirtyDaysFromNow = new Date();
                thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
                localStorage.setItem('rememberMe', 'value=true; expires=' + thirtyDaysFromNow.toUTCString());
            }
			return response
		} catch (error:any) {
            payload.message = error.response.data.message || 'Error Registering User';
			return thunkAPI.rejectWithValue( payload );
		}
	}
);





