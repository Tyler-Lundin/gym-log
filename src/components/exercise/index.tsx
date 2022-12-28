import { default as e }  from "./Exercise.type";

const Exercise = ({E}:{E:e}) => {
	return (
		<div>
            <h1>{E.exercise}</h1>
            <p>{E.weight}</p>
            <p>{E.reps}</p>
		</div>
	)
}

export default Exercise;
