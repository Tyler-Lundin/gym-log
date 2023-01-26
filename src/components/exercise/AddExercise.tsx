import useAddExercise from '../../hooks/useAddExercise';
import StagedExercises from './StagedExercises';

export const AddExercise = () => {
    const {
        isLastStep,
        isFirstStep,
        formSteps,
        formStep,
        handleBack,
        handleNext,
        theme,
    } = useAddExercise();
    const c = theme.color;
    const n = c === 'black' ? 'white' : 'black';

    const buttonClass = `
        rounded-2xl bg-${c} text-${n} text-xl font-bold
        focus:outline-none focus:bg-${n} focus:text-${c}
    `;

	return (
		<div className={`z-50 w-screen h-full absolute left-0 p-4 top-0 box-border`} style={{background:theme.a}}>
			<form className={`w-full border-${c} border-solid border-b p-2 grid`}>
                <div className={` w-full grid grid-cols-3 place-items-center pb-4`}>
                    <button className={buttonClass} onClick={handleBack}>{ isFirstStep ? 'Cancel' : 'Back' }</button>
                    <div className={``}> {formStep + 1} / {formSteps.length} </div>
                    <button className={`${buttonClass} ${isLastStep ? '' : ''}`} onClick={handleNext}> { isLastStep ? 'Add' : 'Next' } </button>
                </div>

                <div className={`relative h-fit`}>
                    <label children={`${formSteps[formStep].label}`} className={`absolute top-4 left-2 text-${n} -translate-y-1/2 z-40`} />
                    <input autoFocus {...formSteps[formStep].props}
                        className={`
                            w-full py-6 px-2 rounded-2xl text-${n} text-3xl text-center bg-${c}
                            focus:outline-none
                        `}
                    />
                </div>
			</form>
                <StagedExercises />
		</div>
	)
}

export default AddExercise;
