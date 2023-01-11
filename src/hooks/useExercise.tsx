import useTheme from './useTheme';
import { useAppDispatch, useAppSelector } from '.';
import { setAddExerciseTagOpen } from "../store/app.slice";
import { removeStagedExercise } from "../store/exercise.slice";
import styles from '../styles/exercise.module.css';


const useExercise = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const { isAddExerciseTagOpen } = useAppSelector(state=>state.app);
    const isBlack = theme.color === 'black';
    const containerClasses = [styles.exerciseContainer, isBlack ? styles.black : styles.white].join(' ');
    const open = (e:any) => {
        e.preventDefault();
        dispatch(setAddExerciseTagOpen(true))
        // also set current exercise ID
    };

    const removeExercise = (id:string|number, index:number) => {
        if (id === undefined) dispatch( removeStagedExercise(index) );
//        if (id !== undefined) dispatch( removeExercise(id) );
        console.log( { id, index } );
    };

    return {
        c: { isBlack, containerClasses, isAddExerciseTagOpen },
        h: { open, removeExercise  },
    }
};

export default useExercise;
