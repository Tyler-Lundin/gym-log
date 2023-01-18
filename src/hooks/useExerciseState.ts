
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
    weight: (weight: string) => {
        const W = weight.replace(/[^0-9]/g, '').replace(/^0+/, '');
        dispatch( setWeight(W === '' ? '0' : W) );
    },
    reps: (reps: string) => {
        const R = reps.replace(/[^0-9]/g, '').replace(/^0+/, '');
        dispatch( setReps(R === '' ? '0' : R) );
    },
    formDidSubmit: (formDidSubmit: boolean) => dispatch( setFormDidSubmit(formDidSubmit) ),
    formStep: (formStep: number) => dispatch( setFormStep(formStep) ),
};

    return {
        newExercise,
        exercises,
        stagedExercises,
        isLoading,
        isError,
        message,
        set,
    }
};

export default useExercise;
