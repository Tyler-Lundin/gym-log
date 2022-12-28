import styles from '../../styles/forms.module.css'
import { selectEmail, selectPassword, setEmail, setPassword } from '../../store/auth.slice';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {loginThunk} from '../../store/thunks/login.thunk';
import {MouseEvent} from 'react';


const Login = () => {
	const email = useAppSelector(selectEmail);
	const password = useAppSelector(selectPassword);
	const dispatch = useAppDispatch();

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
			<button onClick={handleClick}>Login</button>
		</form>
	)
};


export default Login;
