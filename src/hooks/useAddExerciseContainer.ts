import styles from '../styles/addExerciseButton.module.css';

import { useAppDispatch, useAppSelector } from ".";
import { openAddExercise } from "../store/app.slice";

const useAddExerciseContainer = () => {
    const { isAddExerciseOpen: isOpen } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();
    const open = () => dispatch( openAddExercise() );
    const { theme } = useAppSelector(state=>state.app.settings);

	return {
		isOpen,
        open,
        theme,
        styles,
	};
};

export default useAddExerciseContainer;
