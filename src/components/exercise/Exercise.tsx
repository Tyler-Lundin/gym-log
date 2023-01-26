import { IExercise as ExerciseType} from "../../types";
import useExercise from "../../hooks/useExercise";
import useTheme from "../../hooks/useTheme";

const Exercise = ({E, i}:{E:ExerciseType, i:number}) => {
    const { theme } = useTheme();
    const c = theme.color
	return (
		<div key={i} className={`py-4 border-b border-solid border-${c}`}>
            <h3>
                {E.time} - {' '}
                {E.exercise} - {E.weight > 0 && `${E.weight} lbs`}
                { E.weight > 0 && E.reps ? ' x ' : ' ' }
                { E.reps > 0 && `${E.reps} reps` }
            </h3>
		</div>
	)
}

export default Exercise;

