import AddEvent from '../events/AddEvent';
import useDay from '../../hooks/useDay';
import DaySelector from './DaySelector';
import Events from '../events/Events';
import AddExercise from '../exercise/AddExercise';



const Day = () => {
    const { day, dayId, month, year, isLoading, isError, isEventsOpen, isAddExerciseOpen } = useDay();

    if (isAddExerciseOpen) return <AddExercise />
    if (isEventsOpen) return <Events />

    const sectionClasses = `w-full p-2 mx-auto mb-5 border-b border-black`

	return (
		<div className={``} >
            { !isEventsOpen && <DaySelector /> }
			<div id='events-container' className={`py-20 overflow-y-auto`}>
                <div className={sectionClasses} children='Exercise' />
                <div className={sectionClasses} children='Food' />
                <div className={sectionClasses} children='Mood' />
                <div className={sectionClasses} children='Sleep' />
                <div className={sectionClasses} children='Weight' />
                <div className={sectionClasses} children='Water' />

                <AddEvent />
			</div>
		</div>
	)
}

export default Day

