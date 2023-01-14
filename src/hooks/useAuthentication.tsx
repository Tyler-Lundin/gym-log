import styles from "../styles/authentication.module.css";
import useAuth from "./useAuth";
import {useAppDispatch} from '.';
import { clearError } from "../store/auth.slice";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const useAuthentication = () => {
    const dispatch = useAppDispatch();
    const navTo = useNavigate();
    const { pathname } = useLocation();
	const { isLoading, isError, message } = useAuth();


	const handleClick = () => {
        if (pathname === '/auth/login') navTo('/auth/register');
        if (pathname === '/auth/register') navTo('/auth/login');
        if (pathname === '/auth/forgot') navTo('/auth/login');
	};

	const label = pathname === '/auth/register' || pathname === '/auth/forgot' ? 'Login' : 'Register';

    useEffect(()=>{
        const handleErrorMessage = () => {
            if (isError) {
                setTimeout(()=>{
                    dispatch(clearError());
                }, 3666);
            }
        };
        handleErrorMessage();
    }, [isError]);

	return {
		label,
		handleClick,
		isLoading,
		isError,
        styles,
        message,
	};
};

export default useAuthentication;
