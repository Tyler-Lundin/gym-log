import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";
import getDayThunk from "../store/thunks/getDay.thunk";
import { closeEvents } from "../store/app.slice";

const useDay = () => {
    const dispatch = useAppDispatch();
    const { date, isLoading, isError, dayId } = useAppSelector(state => state.day);
    const { month, day, year } = date;
    const { isEventsOpen, isAddExerciseOpen } = useAppSelector(state=>state.app);
    const { exercises } = useAppSelector(state => state.exercise);

    useEffect(()=>{
        dispatch( getDayThunk());
    },[month, day, year, exercises.length]);

    useEffect(()=>{
        if (isEventsOpen) dispatch(closeEvents());
    }, [exercises.length]);

    return {
        day,
        dayId,
        month,
        year,
        isLoading,
        isError,
        isEventsOpen,
        isAddExerciseOpen,
    };
};

export default useDay;
