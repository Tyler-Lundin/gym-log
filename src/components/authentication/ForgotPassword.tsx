import { useState } from 'react';
import styles from '../../styles/forms.module.css';


const useForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(email);
    }

    return {
        email,
        setEmail,
        handleSubmit
    }
}

const ForgotPassword = () => {

    const { email, setEmail, handleSubmit } = useForgotPassword();

    return (
        <div className={styles.forgotPasswordContainer}>
            <h2>Forgot Password</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e:any)=>setEmail(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleSubmit}>reset</button>
            </form>
        </div>
    )
};

export default ForgotPassword;
