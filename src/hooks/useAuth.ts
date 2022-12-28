import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { resetApp } from '../store/app.slice';
import { clearRedirect, resetAuth } from '../store/auth.slice';

const useAuth = () => {
    const navTo = useNavigate();
    const dispatch = useAppDispatch();
    const { isAuth, isLoading, isError, authToken, sessionToken, formData, redirect, message } = useAppSelector((state) => state.auth);
    const authorization = `bearer ${authToken}`;
    const session = `bearer ${sessionToken}`;
    const headers = { authorization, session };


    const logout = () => {
        dispatch( resetAuth() );
        dispatch( resetApp() );

    }


    useEffect(()=>{
        if (redirect === '') return
        dispatch( clearRedirect() );
        navTo(redirect);
    },[redirect]);

    useEffect(()=>{
        if (!isAuth) navTo('/auth/login');
        if (isAuth) navTo('/');
    },[isAuth]);

    return {
        isAuth,
        isLoading,
        isError,
        authToken,
        sessionToken,
        formData,
        headers,
        message,
        logout,
    }
}

export default useAuth
