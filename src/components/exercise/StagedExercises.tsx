import useStagedExercises from '../../hooks/useStagedExercises';
import styles from '../../styles/stagedExercise.module.css';
import Exercise from '.';

const StagedExercises = () => {

    const { stagedExercises } = useStagedExercises();

    return (
        <div className={styles.stagedExercises}>
            {stagedExercises.map((exercise, index) => (
                <Exercise key={index} i={index} E={exercise} />
            ))}
            <div className={styles.saveStagedButtonContainer}>
                <button className={styles.saveStagedButton}>Save</button>
            </div>
        </div>
    )
}


export default StagedExercises;


