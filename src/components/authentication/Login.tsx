import styles from '../../styles/forms.module.css'
import { selectEmail, selectPassword, setEmail, setPassword } from '../../store/auth.slice';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {loginThunk} from '../../store/thunks/login.thunk';
import {MouseEvent} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
	const email = useAppSelector(selectEmail);
	const password = useAppSelector(selectPassword);
	const dispatch = useAppDispatch();
    const { theme } = useAppSelector(state=>state.app.settings);

	const handleClick = (e:MouseEvent) => {
		e.preventDefault();
		dispatch(loginThunk());
	}

	return (
		<form className={styles.form} >
			<div className={styles.formGroup}>
				<label htmlFor="email">Email</label>
				<input autoFocus value={email} onChange={(e)=>dispatch(setEmail(e.target.value))} type="email" name="email" id="email" />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="password">Password</label>
				<input value={password} onChange={(e)=>dispatch(setPassword(e.target.value))} type="password" name="password" id="password" />
			</div>
            <div className={styles.formOptions}>
                <div className={styles.formOption}>
                    <label htmlFor="remember">Remember me</label>
                    <input type="checkbox" name="remember" id="remember" />
                </div>
                <div className={styles.formOption}>
                    <Link to='/auth/forgot'>Forgot password?</Link>
                </div>
            </div>
			<button onClick={handleClick} className={`${theme.color === 'black' ? styles.blackButton : styles.whiteButton}`}>Login</button>
		</form>
	)
};


export default Login;
