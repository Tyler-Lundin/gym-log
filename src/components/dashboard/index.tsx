import styles from '../../styles/dashboard.module.css';
import Day from './Day';
import Navigation from './Navigation';


const Dashboard = () => {


	return (
		<div id='dashboard-container' className={styles.dashboardContainer} >
			<Day />
			<Navigation />
		</div>
	)
}


export default Dashboard
