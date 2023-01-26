import useTheme from '../../hooks/useTheme';
import styles from '../../styles/dashboard.module.css';
import Day from './Day';
import TopMenu from './TopMenu';


const Dashboard = () => {

    const { theme } = useTheme();

	return (
		<div id='dashboard-container' style={{background:theme.a}} className={styles.dashboardContainer} >
            <TopMenu />
            <Day />
		</div>
	)
}


export default Dashboard
