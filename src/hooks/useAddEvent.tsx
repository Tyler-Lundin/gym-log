import styles from '../styles/addExerciseButton.module.css';

import { useAppDispatch, useAppSelector } from ".";
import { openEvents } from "../store/app.slice";

const useAddEvent = () => {
    const { isEventsOpen } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();
    const open = () => dispatch( openEvents() );
    const { theme } = useAppSelector(state=>state.app.settings);

	return {
		isEventsOpen,
        open,
        theme,
        styles,
	};
};

export default useAddEvent;
