//import styles from '../../../styles/exercises.module.css';

import { useEffect } from "react";
import { useAppDispatch, useAppSelector, useDayId } from "../hooks";
import useAuth from "../hooks/useAuth";
import getDayExercisesThunk from "../store/thunks/getDayExercises.thunk";
import styles from '../styles/exercises.module.css';
import Exercise from "./exercise";
import LoadingSpinner from "./LoadingSpinner";

const useExercises = () => {
    const dayId = useDayId();
    const { headers } = useAuth();
    const { isLoading, isError, exercises } = useAppSelector(state=>state.exercise)
    const { theme } = useAppSelector(state=>state.app.settings);
    const dispatch = useAppDispatch();
    console.log( { isLoading, isError, exercises } );

    const getExercises = async () => {
        if (!dayId) return
        await dispatch( getDayExercisesThunk( headers  ) )
    }

    useEffect(()=>{
        if (isLoading) return
        getExercises();
        if (isError) console.log( 'error! @ exercises.tsx' );
    },[])

    return {
        theme, isLoading, isError, exercises
    }
}

const Exercises = () => {
    const {theme,isLoading, isError, exercises } = useExercises();

	return (
		<div id='dashboard-day-exercises-conatiner' className={`${styles.exercisesContainer} ${theme.color === 'black' ? styles.black : styles.white }`} >
            <h1>Exercises</h1>
            { isLoading && <LoadingSpinner /> }
            { isError && <p>error</p> }
            { exercises.map( (E: Exercise, i:string | number) => (
                <Exercise E={E} i={i} />
            ))}
		</div>
	)
}

export default Exercises;

