import { IExercise } from '../types';

const validateExercises = (exercises: Array<IExercise>): Array<IExercise> | [] => {
    const validatedExercises: Array<IExercise> = [];
    exercises.forEach((E: IExercise) => {
        const { dayId, exercise, time, weight, reps, tags, } = E;
        if (dayId && exercise && time && weight && reps && tags) {
            validatedExercises.push(E);
        }
    });
    return validatedExercises;
};

export default validateExercises;
