import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '.';
import {loginThunk} from './thunks/login.thunk';
import registerThunk from './thunks/register.thunk';

const initialState = {
	formData: {
        username: '',
		email: '',
		verifyEmail: '',
		password: '',
		verifyPassword: '',
        rememberMe: false,
	},
    headers: {
        authorization: '',
        session: '',
    },
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
        setUsername: (state, action) => { state.formData.username = action.payload; },
		setEmail: (state, action) => { state.formData.email = action.payload; },
		setVerifyEmail: (state, action) => { state.formData.verifyEmail = action.payload; },
		setPassword: (state, action) => { state.formData.password = action.payload; },
		setVerifyPassword: (state, action) => { state.formData.verifyPassword = action.payload; },
        setRememberMe: (state, action) => { state.formData.rememberMe = action.payload },
        setIsAuth: (state, action) => { state.isAuth = action.payload },
		clearError: (state) => { state.isError = false; },
        clearRedirect: (state) => { state.redirect = ''; },
        clearMessage: (state) => { state.message = ''; },
		resetForm: (state) => { state.formData = initialState.formData; },
        setMessage: (state, action) => { state.message = action.payload; },
        resetLoading: (state) => { state.isLoading = false; },
        setErrorMessage: (state, action) => { state.message = action.payload; state.isError = true;
        }
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			const { authToken, sessionToken } = action.payload;
            state.headers.authorization = `bearer ${authToken}`;
            state.headers.session = `bearer ${sessionToken}`;
			state.isAuth = true;
            state.isLoading = false;
            state.isError = false;
            state.message = '';
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
            const { message, redirect, authToken, sessionToken } = action.payload;
            state.message = message;
            state.redirect = redirect;
            state.headers.authorization = `bearer ${authToken}`;
            state.headers.session = `bearer ${sessionToken}`;
			state.isAuth = true;
			state.formData = initialState.formData;
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

export const selectFormData = (state: RootState) => state.auth.formData;


export const {
    resetLoading,
    resetAuth,
    setUsername,
    setEmail,
    setVerifyEmail,
    setPassword,
    setVerifyPassword,
    setRememberMe,
    setIsAuth,
    clearError,
    clearRedirect,
    clearMessage,
    resetForm,
    setMessage,
    setErrorMessage
} = authSlice.actions;

export default authSlice.reducer;
