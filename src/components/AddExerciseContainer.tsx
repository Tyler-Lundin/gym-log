import { useState } from "react";
import styles from "../styles/addExerciseButton.module.css";
import AddExercise from "./exercise/AddExercise";
import { AiOutlinePlus } from 'react-icons/ai';

const useAddExerciseContainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cancel = () => setIsOpen(false);
    const open = () => setIsOpen(true);

	return {
		isOpen,
        cancel,
        open,
	};
};

const AddExerciseContainer = () => {
	const { cancel, open, isOpen } = useAddExerciseContainer();

	if ( isOpen ) return ( <AddExercise cancel={cancel} /> );

    return (
        <div className={styles.addExerciseContainer}>
            <button onClick={open} className={styles.button}>
                <AiOutlinePlus />
            </button>
        </div>
    )
};

export default AddExerciseContainer;
