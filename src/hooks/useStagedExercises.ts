import { useAppDispatch, useAppSelector } from '.';
import postStagedExercisesThunk from '../store/thunks/postStagedExercises.thunk';

/*
    dayId: string;
    userId: string;
    time: string; // 04:00 (military)
    tags: ITag[];
    exercise: string;
    weight: number;
    reps: number;
*/

const useStagedExercises = () => {
    const dispatch = useAppDispatch();
    const { stagedExercises } = useAppSelector(state => state.exercise);
    const handleSave = (e:any) => {
        e.preventDefault();
        dispatch( postStagedExercisesThunk() );
    }

    return {
        stagedExercises,
        handleSave,
    }
};

export default useStagedExercises;
