import { useDispatch } from "react-redux";
import useTheme from "../../hooks/useTheme";
import useExerciseState from "../../hooks/useExercise";
import { addStagedExercise, resetStagedExercises } from '../../store/exercise.slice';
import styles from '../../styles/addExercise.module.css';
import { useDayId } from "../../hooks";
import useTime from "../../hooks/useTime";
import StagedExercises from './StagedExercises';
import { closeAddExercise } from "../../store/app.slice";

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
    }
}

export const AddExercise = () => {
    const { c, h } = useAddExercise();
	return (
		<div className={styles.addExerciseContainer}>
			<form className={styles.addExerciseForm}>
                <div className={styles.formStepButtons}>
                    <button className={styles.backButton} onClick={h.handleBack}>{ c.isFirstStep ? 'Cancel' : 'Back' }</button>

                    <div className={styles.formStepCounter}> {c.formStep + 1} / {c.formSteps.length} </div>

                    <button className={`${styles.nextButton} ${c.isLastStep ? styles.lastStepButton : ''}`} onClick={h.handleNext}> { c.isLastStep ? 'Add' : 'Next' } </button>
                </div>

                <div className={styles.formStep}>
                    <label>{c.formSteps[c.formStep].label}</label>
                    <input
                        className={c.inputClasses}
                        autoFocus
                        onKeyDown={h.handleKeyDown}
                        {...c.formSteps[c.formStep].props}
                    />
                </div>
                <StagedExercises />
			</form>
		</div>
	)
}

export default AddExercise;
