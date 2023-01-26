import { useAppSelector } from "../../hooks"
import AddButton from "../events/AddEvent"
import AddExercise from "./AddExercise"
import ExerciseStats from "./ExerciseStats"
import ExercisesTable from './ExercisesTable'

const ExerciseEventContainer = () => {
    const { isAddExerciseOpen } = useAppSelector(state => state.app)

    if (isAddExerciseOpen) return <AddExercise />

    return (
        <div className='h-fit'>
            <div className='grid h-full gap-2'>
                <ExercisesTable />
                <ExerciseStats />
                <AddButton />
                {/* <Exercises />*/}
            </div>
        </div>
    )
}

export default ExerciseEventContainer
