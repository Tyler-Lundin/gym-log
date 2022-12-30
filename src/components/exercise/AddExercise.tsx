import { useState } from "react";
import PostExercise from "../../api/postExercise.api";
import { useDayId } from "../../hooks";
import useAuth from "../../hooks/useAuth";
import useTime from "../../hooks/useTime";
import styles from '../../styles/addExercise.module.css';

export const AddExercise = ({ cancel }: { cancel: () => void }) => {
    const { headers } = useAuth();
    const { timeNoSeconds } = useTime();
    const dayId = useDayId();

	const [exerciseForm, setExerciseForm] = useState({
		exercise: '',
		weight: '',
		reps: '',
	})
    const { exercise, weight, reps } = exerciseForm;
    const [step, setStep] = useState(0);

    const handleBack = (e:any) => {
        e.preventDefault();
        if ( step === 0 ) return cancel();
        setStep((currentStep) => currentStep - 1);
    }

    const handleNext = (ev: any) => {
        ev.preventDefault();
        if ( step === 0 && exercise.length <= 0) return
        if (step === formSteps.length - 1) {
            const newExercise = {
                dayId,
                time: timeNoSeconds(),
                exercise,
                weight,
                reps,
                tags: [ { label: exercise, color: 'transparent' } ],
            }
            PostExercise(newExercise, headers)
        }
        else setStep((currentStep) => currentStep + 1);
    }

    const handleKeyDown = (e:any) => {
        if (e.key === 'Escape') {
            handleBack(e);
        }
        if (e.key === 'Enter') {
            handleNext(e);
        }
    }



    const formSteps = [
        {
            label: 'exercise?',
            input: <input autoFocus onKeyDown={handleKeyDown} type="text" value={exercise} onChange={(e) => setExerciseForm({...exerciseForm, exercise: e.target.value})} />
        },
        {
            label: 'weight?',
            input: <input autoFocus onKeyDown={handleKeyDown} type="number" value={weight} onChange={(e)=>setExerciseForm({ ...exerciseForm, weight: e.target.value})} />
        },
        {
            label: 'reps?',
            input: <input autoFocus onKeyDown={handleKeyDown} type="number" value={reps} onChange={(e)=>setExerciseForm({ ...exerciseForm, reps: e.target.value})} />
        },
    ]


	return (
		<div className={styles.addExerciseContainer}>
			<form className={styles.addExerciseForm}>
                <div className={styles.formStepButtons}>
                        <button className={styles.backButton} onClick={handleBack}>Back</button>
                        <button className={styles.nextButton} onClick={handleNext}> Next </button>
                </div>

                <h2>{formSteps[step].label}</h2>
                {formSteps[step].input}

			</form>
		</div>
	)
}

export default AddExercise;
