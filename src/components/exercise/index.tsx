import { IExercise as ExerciseType} from "../../types";
import useTheme from '../../hooks/useTheme';
import styles from '../../styles/exercise.module.css';
import Tag from "../tag";
import AddTag from "../tag/AddTag";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setAddExerciseTagOpen } from "../../store/app.slice";
import { removeStagedExercise } from "../../store/exercise.slice";


const useExercise = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const { isAddExerciseTagOpen } = useAppSelector(state=>state.app);
    const isBlack = theme.color === 'black';
    const containerClasses = [styles.exerciseContainer, isBlack ? styles.black : styles.white].join(' ');
    const open = (e:any) => {
        e.preventDefault();
        dispatch(setAddExerciseTagOpen(true))
        // also set current exercise ID
    };

    const removeExercise = (id:string|number, index:number) => {
        if (id === undefined) dispatch( removeStagedExercise(index) );
//        if (id !== undefined) dispatch( removeExercise(id) );
        console.log( { id, index } );
    };

    return {
        c: { isBlack, containerClasses, isAddExerciseTagOpen },
        h: { open, removeExercise  },
    }
};

const Exercise = ({E, i}:{E:ExerciseType, i:string | number}) => {
    const { c, h } = useExercise();
    if (c.isAddExerciseTagOpen) return <AddTag />
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
                onClick={(e:any)=>{ e.preventDefault(); h.removeExercise(E._id, i);}}
                className={styles.removeExercise} children={'X'} />
		</div>
	)
}

export default Exercise;

