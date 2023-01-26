import styles from '../styles/addExerciseButton.module.css';
import { useAppDispatch, useAppSelector } from ".";
import { openAddExercise } from "../store/app.slice";
import useTheme from './useTheme';

const useAddEvent = () => {
    const { isEventsOpen, selectedEvent } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();

    const open = () => {
        switch(selectedEvent) {
            case 'exercise': {
                dispatch(openAddExercise());
                break;
            }
            default: {
                break;
            }
        }
    }

    const { theme, isBlack } = useTheme();

	return {
		isEventsOpen,
        open,
        theme,
        isBlack,
        styles,
	};
};

export default useAddEvent;
