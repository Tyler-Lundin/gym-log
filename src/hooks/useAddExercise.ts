import { useDispatch } from "react-redux";
import useTheme from './useTheme';
import useExerciseState from './useExerciseState';
import { addStagedExercise, resetStagedExercises } from '../store/exercise.slice';
import styles from '../styles/addExercise.module.css';
import { useDayId } from ".";
import useTime from "./useTime";
import { closeAddExercise } from "../store/app.slice";

const useAddExercise = () => {
    const dispatch = useDispatch();
    const { theme } = useTheme();
    const { newExercise, set } = useExerciseState();
    const dayId = useDayId();
    const { exercise, formStep } = newExercise;
    const { timeNoSeconds } = useTime();
    const cancel = () => {
        dispatch( closeAddExercise() );
        dispatch( resetStagedExercises() );
    }

    const handleBack = (e:any) => {
        e.preventDefault();
        if ( formStep === 0 ) return cancel();
        set.formStep( formStep - 1 );
    }

    const handleNext = (e: any) => {
        e.preventDefault();
        if ( formStep === 0 && exercise.length <= 0) return
        if ( formStep === formSteps.length - 1)
            return dispatch( addStagedExercise( {...newExercise, dayId, time: timeNoSeconds() } ) );
        set.formStep( formStep + 1 );
    }

    const handleKeyDown = (e:any) => {
        if (e.key === 'Escape') handleBack(e);
        if (e.key === 'Enter') handleNext(e);
    }


        const genFormSteps = () => {
            const formInfo = [ 'exercise', 'weight', 'reps' ];
            const steps:any = [];
            formInfo.forEach((label, index) => {
                steps.push({
                    label,
                    props: {
                        value: newExercise[label as keyof typeof newExercise],
                        onChange: (e: any) => {
                            e.preventDefault();
                            if (label === 'exercise') set.exercise(e.target.value);
                            if (label === 'weight') set.weight(e.target.value);
                            if (label === 'reps') set.reps(e.target.value);
                        },
                        key: index,
                    },
                });
            });
            return steps;
        }

    const formSteps = genFormSteps();
    const inputClasses = [styles.addExerciseFormInput, [styles[theme.color]]].join(' ');
    const isLastStep = formStep + 1 === formSteps.length;
    const isFirstStep = formStep === 0

    return {
        c: { inputClasses, isLastStep, isFirstStep, formSteps, formStep },
        h: { handleBack, handleNext, handleKeyDown },
        S: styles,
    }
}

export default useAddExercise;
