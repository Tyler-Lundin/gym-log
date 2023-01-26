import { useMemo, useState } from "react";
import { useDay, useExercises, useTheme } from "../../hooks";


const ExerciseStats = () => {
    const { exercises } = useExercises();
    const { day } = useDay();
    const { theme } = useTheme();
    const c = theme.color; // c - color
    const [stats, setStats] = useState({
        totalWeight: 0,
        totalReps: 0,
        totalSets: 0,
        totalVolume: 0,
        avgWeight: 0,
        avgReps: 0,
        avgVolume: 0,
    });

    useMemo(() => {
        if (exercises.length === 0) return

        let totalWeight = 0;
        let totalReps = 0;
        let totalSets = 0;
        let totalVolume = 0;
        let avgWeight = 0;
        let avgReps = 0;
        let avgVolume = 0;

        exercises.forEach((E:any) => {
            totalWeight += E.weight;
            totalReps += E.reps;
            totalSets += 1;
            totalVolume += E.weight * E.reps;
        });


        const round = (num:number) => Math.round((num + Number.EPSILON) * 100) / 100;

        avgWeight = round(totalWeight / totalSets);
        avgReps = round(totalReps / totalSets);
        avgVolume = round(totalVolume / totalSets);


        setStats({
            totalWeight,
            totalReps,
            totalSets,
            totalVolume,
            avgWeight,
            avgReps,
            avgVolume,
        });
    }, [exercises, day]);

    return (
            <div id='stats-container' className='grid gap-2 w-full px-4 pt-4 mx-auto mb-5 '>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col'>
                        <h4> Total Weight </h4>
                        <h4> Total Reps </h4>
                        <h4> Total Sets </h4>
                        <h4> Total Volume </h4>
                    </div>
                    <div className='flex flex-col text-right'>
                        <h4> {stats.totalWeight} </h4>
                        <h4> {stats.totalReps} </h4>
                        <h4> {stats.totalSets} </h4>
                        <h4> {stats.totalVolume} </h4>
                    </div>

                    <div className='flex flex-col'>
                        <h4> Avg Weight </h4>
                        <h4> Avg Reps </h4>
                        <h4> Avg Volume </h4>
                    </div>

                    <div className='flex flex-col text-right'>
                        <h4> {stats.avgWeight ?? '-'} </h4>
                        <h4> {stats.avgReps} </h4>
                        <h4> {stats.avgVolume} </h4>
                    </div>
                    <div className={`border-b border-${c} w-3/5 mx-auto my-2 col-span-full`} />
                </div>
            </div>
    )
}

export default ExerciseStats;
