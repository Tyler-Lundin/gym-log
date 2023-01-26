import { useExercises } from "../../hooks";
import useTheme from "../../hooks/useTheme";



const ExerciseTable = () => {

    const { theme } = useTheme();

    const { exercises } = useExercises();
    const c = theme.color; // c - color

    const tableStyle = `grid grid-cols-10 gap-8 items-center text-left`;

    return (
        <div className={`text-${c} h-96 p-4 overflow-hidden border rounded-2xl border-${c} m-2`} style={{background:theme.b}}>
            <div className={`flex flex-col relative w-full h-full`}>
                <div className={`${tableStyle}`}>
                    <h4 className='col-span-2'>Time</h4>
                    <h4 className='col-span-4'>Exercise</h4>
                    <h4 className='col-span-2'>Weight</h4>
                    <h4 className='col-span-2'>Reps</h4>
                </div>

                <div className={`border-b border-${c} mt-2`}></div>
                <div className={`h-full overflow-y-auto pt-2`}>
                    { exercises.map( (E:any, i:number) => (
                        <div key={`exercise${i}`} className={`${tableStyle} mb-2`}>
                            <h4 className='col-span-2'>{E.time}</h4>
                            <h4 className='col-span-4'>{E.exercise}</h4>
                            <h4 className='col-span-2'>{E.weight}</h4>
                            <h4 className='col-span-2'>{E.reps}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default ExerciseTable;
