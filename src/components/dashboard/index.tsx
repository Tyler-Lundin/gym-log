import useTheme from '../../hooks/useTheme';
import styles from '../../styles/dashboard.module.css';
import Day from './Day';
import Navigation from './Navigation';


const Dashboard = () => {

    const { theme } = useTheme();

	return (
		<div id='dashboard-container' style={{background:theme.a}} className={styles.dashboardContainer} >
			<Day />
			<Navigation />
		</div>
	)
}


export default Dashboard
