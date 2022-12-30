import { Exercise } from "../types";

const validateExercise = (Exercise: { [key:string]: any }) => {
    const errs: string[] = [];
    let { dayId, time, tags, weight, reps, exercise } = Exercise;
    if ( !dayId ) errs.push('dayId');
    if ( !time ) errs.push('time');
    if ( !exercise ) errs.push('exercise');
    if ( !tags ) errs.push('tags');
    if ( !weight ) errs.push('weight');
    if ( !reps ) errs.push('reps');

    if (errs.length > 0) {
        console.log('errs', errs);
        return false;
    }

    console.log('Exercise', Exercise);
    return Exercise as Exercise;
}

export default validateExercise;

