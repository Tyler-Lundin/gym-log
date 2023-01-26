import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useAuth, useDayId } from '.';
import { resetLoading } from '../store/auth.slice';
import getDayExercisesThunk from '../store/thunks/getDayExercises.thunk';


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

export default useExercises;
