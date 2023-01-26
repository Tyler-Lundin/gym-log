import useAuth from '../../hooks/useAuth';
import styles from '../../styles/seeYa.module.css';

const Logout  = () => {

    const { logout } = useAuth();

    logout();

    return (
        <div className={styles.seeYaContainer}>
            <h1>See you next time :)</h1>
        </div>
    )
}

export default Logout;
