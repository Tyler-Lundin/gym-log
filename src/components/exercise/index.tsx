import { IExercise as ExerciseType} from "../../types";
import styles from '../../styles/exercise.module.css';
import Tag from "../tag";
import AddTag from "../tag/AddTag";
import useExercise from "../../hooks/useExercise";

const Exercise = ({E, i}:{E:ExerciseType, i:number}) => {
    const { c, h } = useExercise();
    if (c.isAddExerciseTagOpen) return <AddTag i={i}/>
	return (
		<div key={i} className={c.containerClasses}>
            <p>{E.time}</p>

            <h3>
                {E.exercise} - {E.weight > 0 && `${E.weight} lbs`}
                { E.weight > 0 && E.reps ? ' x ' : ' ' }
                { E.reps > 0 && `${E.reps} reps` }
            </h3>

            <div className={styles.tagsContainer}>
                { E.tags.map( (T, i) => (
                    <Tag T={T} key={i} i={i} />
                ))}
                <button onClick={h.open} className={styles.addTag}>+</button>
            </div>

            <button
                onClick={(e:any)=>{
                    e.preventDefault();
                    h.removeExercise(E._id, i);
                }}
                className={styles.removeExercise} children={'X'}
            />
		</div>
	)
}

export default Exercise;

