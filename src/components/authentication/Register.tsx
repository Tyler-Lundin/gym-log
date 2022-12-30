import styles from '../../styles/forms.module.css'
import {  setEmail, setPassword, setVerifyEmail, setVerifyPassword } from '../../store/auth.slice';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {selectAuth} from '../../store';
import registerThunk from '../../store/thunks/register.thunk';
import { MouseEvent } from 'react';



const Register = () => {
	const { formData } = useAppSelector(selectAuth);
	const { email, verifyEmail, password, verifyPassword } = formData;
    const { theme } = useAppSelector(state=>state.app.settings);

	const dispatch = useAppDispatch();

	const handleClick = (e:MouseEvent) => {
		e.preventDefault();
		dispatch(registerThunk());
	}

	return (
		<form className={styles.form} onSubmit={(e)=>{e.preventDefault()}}>
			<div className={styles.formGroup}>
				<label htmlFor="email">Email</label>
				<input autoFocus value={email} onChange={(e)=>dispatch(setEmail(e.target.value))} type="email" name="email" id="email" />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="verify-email">Verify Email</label>
				<input value={verifyEmail} onChange={(e)=>dispatch(setVerifyEmail(e.target.value))} type="email" name="verify-email" id="verify-email" />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="password">Password</label>
				<input value={password} onChange={(e)=>dispatch(setPassword(e.target.value))} type="password" name="password" id="password" />
			</div>
			<div className={styles.formGroup}>
				<label htmlFor="verify-password">Verify Password</label>
				<input value={verifyPassword} onChange={(e)=>dispatch(setVerifyPassword(e.target.value))} type="password" name="verify-password" id="verify-password" />
			</div>
			<button type="submit" className={theme.color === 'black' ? styles.blackButton : styles.whiteButton } onClick={handleClick}>Register</button>
		</form>
	)
};


export default Register;
