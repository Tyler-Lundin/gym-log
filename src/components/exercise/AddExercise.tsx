import useAddExercise from '../../hooks/useAddExercise';
import StagedExercises from './StagedExercises';

export const AddExercise = () => {
    const {
        inputClasses,
        isLastStep,
        isFirstStep,
        formSteps,
        formStep,
        handleBack,
        handleNext,
        handleKeyDown,
        styles,
        theme,
        inputLength,
    } = useAddExercise();

	return (
		<div className={styles.addExerciseContainer} style={{background:theme.a}}>
			<form className={styles.addExerciseForm}>
                <div className={styles.formStepButtons}>
                    <button className={styles.backButton} onClick={handleBack}>{ isFirstStep ? 'Cancel' : 'Back' }</button>

                    <div className={styles.formStepCounter}> {formStep + 1} / {formSteps.length} </div>

                    <button className={`${styles.nextButton} ${isLastStep ? styles.lastStepButton : ''}`} onClick={handleNext}> { isLastStep ? 'Add' : 'Next' } </button>
                </div>

                <div className={styles.formStep}>
                    <label children={`${formSteps[formStep].label}:`} className={styles.formStepLabel} />
                    <input
                        className={`${false && inputClasses}
                            w-full p-4 pt-12
                        `}
                        autoFocus
                        onKeyDown={handleKeyDown}
                        {...formSteps[formStep].props}
                    />
                </div>
                <StagedExercises />
			</form>
		</div>
	)
}

export default AddExercise;
