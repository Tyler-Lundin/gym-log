import { useEffect } from "react";
import { useAppDispatch, useAppSelector, useDayId } from "../../hooks";
import useAuth from "../../hooks/useAuth";
import getDayExercisesThunk from "../../store/thunks/getDayExercises.thunk";
import styles from "../../styles/exercises.module.css";
import Exercise from "../exercise/Exercise";
import { IExercise as ExerciseType } from "../../types";
import LoadingSpinner from "../uxui/LoadingSpinner";
import { resetLoading } from "../../store/exercise.slice";

export const useExercises = () => {
  const dayId = useDayId();
  const { headers } = useAuth();
  const { isLoading, isError, exercises } = useAppSelector( (state) => state.exercise
  );
  const { theme } = useAppSelector((state) => state.app.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) dispatch(resetLoading());
    if (isError) dispatch(resetLoading());
    dispatch(getDayExercisesThunk(headers));
  }, [dayId]);

  return {
    theme,
    isLoading,
    isError,
    exercises,
  };
};

const Exercises = () => {
    const { theme, isLoading, isError, exercises } = useExercises();

    return (
        <div
            id="dashboard-day-exercises-conatiner"
            className={`h-full`}
        >
            {isLoading && <LoadingSpinner />}
            {isError && <p>error</p>}
            {exercises.map((E: ExerciseType, i: number) => (
                <Exercise E={E} key={i} i={i} />
            ))}
        </div>
    );
};

export default Exercises;
