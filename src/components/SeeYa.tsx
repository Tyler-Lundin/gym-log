import useAuth from '../hooks/useAuth';
import styles from '../styles/seeYa.module.css';

const SeeYa  = () => {

    const { logout } = useAuth();

    logout();

    return (
        <div className={styles.seeYaContainer}>
            <h1>See Ya!</h1>
        </div>
    )
}

export default SeeYa;
