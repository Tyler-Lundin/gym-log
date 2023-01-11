import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAddExerciseTagOpen } from '../../store/app.slice';
import styles from '../../styles/addTag.module.css';
import TagThemePicker from './TagThemePicker';
import { RiCloseFill, } from "react-icons/ri";

const AddTag = ( ) => {
    const { newTag, stagedExercises } = useAppSelector(state=>state.exercise);

    const dispatch = useAppDispatch(); const close = (e:any) => { e.preventDefault(); dispatch( setAddExerciseTagOpen(false) ); }

    const lastIndex = stagedExercises.length - 1;
    const lastExercise = stagedExercises[lastIndex];

    const premadeTags = [
        `${lastExercise.exercise}`,
        `Personal Record`,
        `Experimenting`,
        `Warmup`,
        `Cooldown`,
        `New Exercise`,
        `New Weight`,
        `New Reps`,
        `Slow Reps`,
        `Fast Reps`,
        `Pause Reps`,
        `Drop Set`,
        `Superset`,
    ];

    return (
        <div className={styles.addTagContainer}>
            <div className={styles.addTagBlurContainer}></div>
            <button onClick={close} className={styles.closeButton}>
			    <RiCloseFill size={40} />
            </button>
            <div className={styles.newTagContainer} style={{backgroundColor: newTag.color}}>
                <label htmlFor="tag">Tag</label>
                <input name='tag' type="text" defaultValue={premadeTags[Math.random() * lastIndex]} placeholder="Add Tag" />
            </div>
            <div className={styles.tagThemeContainer} >
                <TagThemePicker />
            </div>
        </div>
    )
}


export default AddTag;
