import Welcome from "./Welcome";
import LoadingSpinner from "../uxui/LoadingSpinner";
import { Outlet } from "react-router-dom";
import useAuthentication from '../../hooks/useAuthentication';


const Authentication = () => {
	const {
		label,
		handleClick,
		isLoading,
		isError,
        styles,
        message,
	} = useAuthentication();

	return (
		<div id="authentication-background">
			<Welcome />
			<div id="authentication-container" className={`${isError ? styles.shake : ''} ${styles.authContainer}`}>
                { isError && (
			        <div className={styles.errorContainer}>
				        <h2> { message || 'Error Logging In' } </h2>
			        </div>
                )}
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
