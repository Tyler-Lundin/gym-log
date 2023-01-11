import { useAppSelector } from '.';

const useStagedExercises = () => {
    const { stagedExercises } = useAppSelector(state => state.exercise);

    return {
        stagedExercises,
    }
};

export default useStagedExercises;
