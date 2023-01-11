import useAddExercise from '../../hooks/useAddExercise';
import StagedExercises from './StagedExercises';

export const AddExercise = () => {
    const { c, h, S } = useAddExercise();
	return (
		<div className={S.addExerciseContainer}>
			<form className={S.addExerciseForm}>
                <div className={S.formStepButtons}>
                    <button className={S.backButton} onClick={h.handleBack}>{ c.isFirstStep ? 'Cancel' : 'Back' }</button>

                    <div className={S.formStepCounter}> {c.formStep + 1} / {c.formSteps.length} </div>

                    <button className={`${S.nextButton} ${c.isLastStep ? S.lastStepButton : ''}`} onClick={h.handleNext}> { c.isLastStep ? 'Add' : 'Next' } </button>
                </div>

                <div className={S.formStep}>
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
