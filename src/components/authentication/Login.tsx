import styles from '../../styles/forms.module.css'
import { selectFormData, setEmail, setErrorMessage, setIsAuth, setPassword, setRememberMe } from '../../store/auth.slice';
import {useAppSelector, useAppDispatch} from '../../hooks';
import { loginThunk } from '../../store/thunks/login.thunk';
import {MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import validateLogin from '../../util/validateLogin';


const Login = () => {
	const { email, password, rememberMe } = useAppSelector(selectFormData);

	const dispatch = useAppDispatch();
    const { theme } = useAppSelector(state=>state.app.settings);

	const handleClick = (e:MouseEvent) => {
		e.preventDefault();
        if (!validateLogin(email, password)) return dispatch(setErrorMessage('Please enter a valid email or username, and password'));
        dispatch(loginThunk());
	}


	return (
		<form className={styles.form} >
			<div className={styles.formGroup}>
				<label htmlFor="email">Email or Username</label>
				<input autoComplete={"username"} autoFocus value={email} onChange={(e)=>dispatch(setEmail(e.target.value))} type="email" name="email" id="email" />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="password">Password</label>
				<input autoComplete="current-password" value={password} onChange={(e)=>dispatch(setPassword(e.target.value))} type="password" name="password" id="password" />
			</div>
            <div className={styles.formOptions}>
                <div className={styles.formOption}>
                    <label htmlFor="remember">Remember me</label>
                    <input aria-checked={rememberMe} onChange={()=> dispatch(setRememberMe(!rememberMe))} type="checkbox" name="remember" id="remember" />
                </div>
                <div className={styles.formOption}>
                    <Link to='/auth/forgot'>Forgot password?</Link>
                </div>
            </div>
			<button
                onClick={handleClick}
                className={`${theme.color === 'black' ? styles.blackButton : styles.whiteButton}`}>Login</button>
		</form>
	)
};


export default Login;
