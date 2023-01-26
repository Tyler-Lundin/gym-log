import useStagedExercises from "../../hooks/useStagedExercises";
import useTheme from "../../hooks/useTheme";
import StagedExercise from "./StagedExercise";

const StagedExercises = () => {
    const { stagedExercises, handleSave } = useStagedExercises();
    const { theme } = useTheme();
    const length = stagedExercises.length ?? 0;
    const c = theme.color;
    const t = c === 'black' ? 'white' : 'black';

  return (
    <div className={` h-full grid`}>

        { length > 0 && (
            <button
                className={`
                    absolute bottom-0 left-0 w-full py-12 z-30 bg-${c} text-${t} text-2xl font-bold rounded-none
                    focus:outline-none focus:bg-${t} focus:text-${c}
                `}
                onClick={handleSave}
            >
                save ( {length} ) {length === 1 ? 'exercise' : 'exercises'}
            </button>
        )}

        <div className={`h-full`}>
            {stagedExercises.map((exercise, index) => (
                <StagedExercise key={index} i={index} E={exercise} />
            ))}
        </div>

    </div>
  );
};

export default StagedExercises;
