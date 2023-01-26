import useStagedExercises from "../../hooks/useStagedExercises";
import useTheme from "../../hooks/useTheme";
import styles from "../../styles/stagedExercise.module.css";
import StagedExercise from "./StagedExercise";

const StagedExercises = () => {
    const { stagedExercises, handleSave } = useStagedExercises();
    const { theme } = useTheme();
    const length = stagedExercises.length ?? 0;
    const c = theme.color;
    const t = c === 'black' ? 'white' : 'black';

  return (
    <div className={`${styles.stagedExercises} h-full grid`}>

        { length > 0 && (
            <button
                className={`mx-4 mt-2 p-4 text-2xl font-bold text-${t} bg-${c} `}
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
