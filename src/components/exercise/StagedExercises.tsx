import Exercise from ".";
import useStagedExercises from "../../hooks/useStagedExercises";
import styles from "../../styles/stagedExercise.module.css";
import StagedExercise from "./StagedExercise";

const StagedExercises = () => {
  const { stagedExercises, handleSave } = useStagedExercises();

  return (
    <div className={styles.stagedExercises}>
      {stagedExercises.map((exercise, index) => (
        <StagedExercise key={index} i={index} E={exercise} />
      ))}
      <div className={styles.saveStagedButtonContainer}>
        <button className={styles.saveStagedButton} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default StagedExercises;
