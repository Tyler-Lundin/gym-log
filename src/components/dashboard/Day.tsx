import useDay from '../../hooks/useDay';
import Events from '../events/Events';
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ExerciseEventContainer from '../exercise/ExerciseEventContainer';
import { setSelectedEvent } from '../../store/app.slice';



const Day = () => {
    const { day, dayId, month, year, isLoading, isError, isEventsOpen, isAddExerciseOpen } = useDay();
    const { theme } = useTheme();
    const { selectedEvent } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();

    if (isEventsOpen) return <Events />

    const renderCurrentEvent = () => {
        switch(selectedEvent.toLowerCase()) {
            case 'exercise': {
                return <ExerciseEventContainer />
            }
            default: {
                dispatch(setSelectedEvent('exercise'));
            }
        }
    }
	return (
		<div className={`h-screen box-border w-screen py-24`} >
			<div id='events-container' className={`p-2 h-full`}>
                {renderCurrentEvent()}
			</div>
		</div>
	)
}

export default Day

