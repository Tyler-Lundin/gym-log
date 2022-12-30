import styles from "../../styles/authentication.module.css";
import InfoCard from "../InfoCard";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner";
import {useAppDispatch} from "../../hooks";
import {clearError} from "../../store/auth.slice";
import { Outlet, useNavigate, useLocation } from "react-router-dom";



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
		setTimeout(() => {
			dispatch(clearError());
		}, 3000);
		return (
			<div className={styles.errorContainer}>
				<h2> { message || 'Error Logging In' } </h2>
			</div>
		);
	};

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
			<InfoCard />
			<div id="authentication-container" className={`${isError ? styles.shake : ''} ${styles.authContainer}`}>
				{ renderError() }
                { isLoading ? <LoadingSpinner /> :  <Outlet /> }
				{ !isLoading && (
                    <>
                        <span className={styles.or}>or</span>
				        <button disabled={isLoading} onClick={handleClick}>
					        {label}
			            </button>
                    </>
                )}
			</div>
		</div>
	);
};

export default Authentication;
