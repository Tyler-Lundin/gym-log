import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '.';
import {loginThunk} from './thunks/login.thunk';
import registerThunk from './thunks/register.thunk';



const initialState = {
	formData: {
		email: '',
		verifyEmail: '',
		password: '',
		verifyPassword: '',
	},
	authToken: '',
	sessionToken: '',
	isAuth: false,
	isLoading: false,
	isError: false,
    redirect: '',
    message: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
        resetAuth: () => initialState,
		setEmail: (state, action) => {
			state.formData.email = action.payload;
		},
		setVerifyEmail: (state, action) => {
			state.formData.verifyEmail = action.payload;
		},
		setPassword: (state, action) => {
			state.formData.password = action.payload;
		},
		setVerifyPassword: (state, action) => {
			state.formData.verifyPassword = action.payload;
		},
		clearError: (state) => {
			state.isError = false;
		},
        clearRedirect: (state) => {
            state.redirect = '';
        },
        clearMessage: (state) => {
            state.message = '';
        },
		resetForm: (state) => {
			state.formData = initialState.formData;
		},
        setMessage: (state, action) => {
            state.message = action.payload;
        },
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			const { authToken, sessionToken } = action.payload;
			state.authToken = authToken;
			state.sessionToken = sessionToken;
			state.isAuth = true;
			state.formData = initialState.formData;
		});

		builder.addCase(loginThunk.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(loginThunk.rejected, (state, action) => {
            const { message } = action.payload as { message: string | undefined };
			state.isError = true;
			state.isLoading = false;
            state.message = message || 'Login failed';
		});

        builder.addCase(registerThunk.fulfilled, (state, action) => {
            const { message, redirect } = action.payload;
            state.message = message;
            state.redirect = redirect;
        });

        builder.addCase(registerThunk.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(registerThunk.rejected, (state, action) => {
            const { message, redirect } = action.payload as { message: string, redirect: string };
            state.message = message;
            state.redirect = redirect;
            state.isError = true;
            state.isLoading = false;
        });

	}
});

export const selectEmail = (state: RootState) => state.auth.formData.email;
export const selectVerifyEmail = (state: RootState) => state.auth.formData.verifyEmail;
export const selectPassword = (state: RootState) => state.auth.formData.password;
export const selectVerifyPassword = (state: RootState) => state.auth.formData.verifyPassword;


export const { resetAuth, setEmail, setVerifyEmail, setPassword, setVerifyPassword, clearError, clearRedirect, clearMessage, resetForm, setMessage } = authSlice.actions;

export default authSlice.reducer;
