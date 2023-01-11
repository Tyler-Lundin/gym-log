
import { useAppDispatch, useAppSelector } from '.';
import {  setDayId, setExercise, setFormDidSubmit, setFormStep, setReps, setTags, setTime, setWeight } from '../store/exercise.slice';

const useExercise = () => {

    const dispatch = useAppDispatch();
    const { newExercise, exercises, isLoading, isError, message, stagedExercises } = useAppSelector(state => state.exercise);

//    const { dayId, time, tags, exercise, weight, reps } = newExercise;
//    const reset = () => dispatch( resetExerciseState() );

    // set object properties
const set = {
    dayId: (dayId: string) => dispatch( setDayId(dayId) ),
    time: (time: string) => dispatch( setTime(time) ),
    tags:(tags: string[]) => dispatch( setTags(tags) ),
    exercise: (exercise: string) => dispatch( setExercise(exercise) ),
    weight: (weight: string) => dispatch( setWeight(weight) ),
    reps: (reps: string) => dispatch( setReps(reps) ),
    formDidSubmit: (formDidSubmit: boolean) => dispatch( setFormDidSubmit(formDidSubmit) ),
    formStep: (formStep: number) => dispatch( setFormStep(formStep) ),
};
    type Set = typeof set;

    return {
        newExercise,
        exercises,
        stagedExercises,
        isLoading,
        isError,
        message,
        set,
        Set,
    }
};

export default useExercise;
