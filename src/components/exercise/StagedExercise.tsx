import { IExercise as ExerciseType} from "../../types";
import Tag from "../tag";
import AddTag from "../tag/AddTag";
import useExercise from "../../hooks/useExercise";

const StagedExercise = ({E, i}:{E:ExerciseType, i:number}) => {
    const { isBlack, removeExercise } = useExercise();
	return (
		<div key={i} className={`
            ${isBlack ? 'text-black' : 'text-white'}
            grid px-4
            border-b border-solid border-black
            relative
            py-4
        `}>
            <h3>TIME: {E.time}</h3>
            <h3> Exercise: {E.exercise} </h3>
            <h3> Weight: {E.weight} </h3>
            <h3> Reps: {E.reps} </h3>


            <button
                onClick={(e:any)=>{ e.preventDefault(); removeExercise(E._id, i); }}
                children={'X'}
                className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl
                   hover:bg-red-500 focus:bg-red-500 flex justify-center items-center
                `}
            />
		</div>
	)
}

export default StagedExercise;


            // <div className={``}>
            //     { E.tags.map( (T, i) => (
            //         <Tag T={T} key={i} i={i} />
            //     ))}
            //     <button onClick={open} className={``}>Add Tag</button>
            // </div>
