import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";
import getDayThunk from "../store/thunks/getDay.thunk";
import { closeAddExercise } from "../store/app.slice";

const useDay = () => {
    const dispatch = useAppDispatch();
    const { date, isLoading, isError, dayId } = useAppSelector(state => state.day);
    const { month, day, year } = date;
    const { isAddExerciseOpen } = useAppSelector(state=>state.app);
    const { exercises } = useAppSelector(state => state.exercise);

    useEffect(()=>{
        dispatch( getDayThunk());
    },[month, day, year, exercises.length]);

    useEffect(()=>{
        if (isAddExerciseOpen) dispatch(closeAddExercise());
    }, [exercises.length]);

    return {
        day,
        dayId,
        month,
        year,
        isLoading,
        isError,
        isAddExerciseOpen,
    };
};

export default useDay;
