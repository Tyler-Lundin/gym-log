import styles from "../styles/addExerciseButton.module.css";
import AddExercise from "./exercise/AddExercise";
import { AiOutlinePlus } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeAddExercise, openAddExercise } from "../store/app.slice";

const useAddExerciseContainer = () => {
    const { isAddExerciseOpen: isOpen } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();
	const cancel = () => dispatch( closeAddExercise() );
    const open = () => dispatch( openAddExercise() );
    const { theme } = useAppSelector(state=>state.app.settings);

	return {
		isOpen,
        cancel,
        open,
        theme,
	};
};

const AddExerciseContainer = () => {
	const { cancel, open, isOpen, theme } = useAddExerciseContainer();

	if ( isOpen ) return ( <AddExercise cancel={cancel} /> );

    return (
        <div className={styles.addExerciseContainer}>
            <button onClick={open} className={`${styles.button} ${theme.color === 'black' ? styles.black : styles.white }` }>
                <AiOutlinePlus color={theme.color}/>
            </button>
        </div>
    )
};

export default AddExerciseContainer;
