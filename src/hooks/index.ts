
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useDayId = () => useAppSelector(state => state.day.dayId);

export { default as useAuth } from './useAuth';
export { default as useDay } from './useDay';
export { default as useExercises } from './useExercises';
// export { default as useSettings } from './useSettings';
export { default as useTheme } from './useTheme';

