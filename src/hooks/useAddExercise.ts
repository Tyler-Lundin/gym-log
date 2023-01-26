import { useDispatch } from "react-redux";
import useTheme from './useTheme';
import useExerciseState from './useExerciseState';
import { addStagedExercise, resetStagedExercises } from '../store/exercise.slice';
import { useDayId } from ".";
import useTime from "./useTime";
import { closeAddExercise } from "../store/app.slice";
import { useEffect, useMemo, useState } from "react";

const useAddExercise = () => {
    const dispatch = useDispatch();
    const { theme } = useTheme();
    const { newExercise, set } = useExerciseState();
    const dayId = useDayId();
    const { exercise, formStep } = newExercise;
    const { timeNoSeconds } = useTime();
    const [inputLength, setInputLength] = useState(0);

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
                        setInputLength(e.target.value.length);
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

    const formSteps = useMemo(genFormSteps, [newExercise, formStep, inputLength]);
    const isLastStep = formStep + 1 === formSteps.length;
    const isFirstStep = formStep === 0

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [formStep]);

    return {
        isLastStep,
        isFirstStep,
        formSteps,
        formStep,
        handleBack,
        handleNext,
        theme,
        inputLength,
    }
}

export default useAddExercise;
