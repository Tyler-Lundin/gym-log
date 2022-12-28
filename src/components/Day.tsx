
import DateSlider from './DateSlider'
import styles from '../styles/day.module.css';
import Exercises from './Exercises';
import AddExerciseContainer from './AddExerciseContainer';

const Day = () => {

	return (
		<div className={styles.dayContainer} >

			<DateSlider />

			<div id='exercises-container' className={styles.eventsContainer}>
                <Exercises />
                <AddExerciseContainer />
			</div>
		</div>
	)
}

export default Day

