import { Exercise as ExerciseType} from "../../types";
import styles from '../../styles/exercise.module.css';
import Tag from "../Tag";

const Exercise = ({E, i}:{E:ExerciseType, i:string | number}) => {
	return (
		<div key={i} className={styles.exerciseContainer}>
            <p>{E.time}</p>
            <h3>{E.exercise} - {E.weight} lbs x {E.reps} </h3>
            <div className={styles.tagsContainer}>
                { E.tags.map( (T, i) => (
                    <Tag T={T} i={i} />
                ))}
            </div>
		</div>
	)
}

export default Exercise;
