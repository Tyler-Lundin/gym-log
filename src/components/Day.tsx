
import DateSlider from './DateSlider'
import styles from '../styles/day.module.css';
import Exercises from './Exercises';
import AddExerciseContainer from './AddExerciseContainer';
import { useAppSelector } from '../hooks';

const Day = () => {
    const { isAddExerciseOpen } = useAppSelector(state=>state.app);

	return (
		<div className={styles.dayContainer} >

			<DateSlider />

			<div id='exercises-container' className={styles.eventsContainer}>
                { !isAddExerciseOpen && <Exercises /> }
                <AddExerciseContainer />
			</div>
		</div>
	)
}

export default Day

