import DateSlider from './DateSlider';
import styles from '../../styles/day.module.css';
import Exercises from '../exercise/Exercises';
import AddExerciseContainer from '../exercise/AddExerciseContainer';
import useDay from '../../hooks/useDay';


const Day = () => {
    const { day, dayId, month, year, isLoading, isError, isAddExerciseOpen } = useDay();

	return (
		<div className={styles.dayContainer} >

			{!isAddExerciseOpen && <DateSlider /> }

			<div id='exercises-container' className={styles.eventsContainer}>
                { !isAddExerciseOpen && <Exercises /> }
                <AddExerciseContainer />
			</div>
		</div>
	)
}

export default Day

