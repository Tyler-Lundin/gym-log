import styles from "../../styles/authentication.module.css";
import Hero from "../Hero";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../uxui/LoadingSpinner";
import {useAppDispatch} from "../../hooks";
import { clearError, resetLoading, setErrorMessage, setMessage } from "../../store/auth.slice";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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



	const renderError = () => {
		if (!isError) return null;
		return (
			<div className={styles.errorContainer}>
				<h2> { message || 'Error Logging In' } </h2>
			</div>
		);
	};

    useEffect(()=>{
        const resetIfLoadingTooLong = () => {
            if (isLoading) {
                const timeout = setTimeout(()=>{
                    dispatch(resetLoading());
                    dispatch(setErrorMessage('Loading is taking longer than expected. Please check your internet connection and try again.'));
                }, 10000);
                console.log({timeout});
                return () => clearTimeout(timeout);
            }
        };
    }, [isLoading, isError]);

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
		renderError,
	};
};

const Authentication = () => {
	const {
		label,
		handleClick,
		isLoading,
		isError,
		renderError,
	} = useAuthentication();

	return (
		<div id="authentication-background">
			<Hero />
			<div id="authentication-container" className={`${isError ? styles.shake : ''} ${styles.authContainer}`}>
				{ renderError() }
                { isLoading ? <LoadingSpinner /> :  <Outlet /> }
				{ !isLoading && (
                    <>
                        <span className={styles.or}>or</span>
				        <button disabled={isLoading || isError} onClick={handleClick}>
					        {label}
			            </button>
                    </>
                )}
			</div>
		</div>
	);
};

export default Authentication;
