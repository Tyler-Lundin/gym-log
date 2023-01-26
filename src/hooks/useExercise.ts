
import useTheme from './useTheme';
import { useAppDispatch, useAppSelector } from '.';
import { openAddTag,  } from "../store/app.slice";
import { removeStagedExercise } from "../store/exercise.slice";


const useExercise = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const { isAddExerciseTagOpen } = useAppSelector(state=>state.app);
    const isBlack = theme.color === 'black';
    const open = (e:any) => {
        e.preventDefault();
        dispatch( openAddTag() );
        // also set current exercise ID
    };

    const removeExercise = (id:string|number, index:number) => {
        if (id === undefined) dispatch( removeStagedExercise(index) );
//        if (id !== undefined) dispatch( removeExercise(id) );
        console.log( { id, index } );
    };

    return {
        isBlack,
        isAddExerciseTagOpen,
        open,
        removeExercise,
    }
};

export default useExercise;
