import axiosInstance from "../configs/axios.config"
import { IExercise } from "../types";
import validateExercise from "../util/validateExercise";

export type ExercisePayload = {
    dayId: string,
    time: string;
    tags: { label: string; color: string; }[];
    exercise: string;
    weight: number | string;
    reps: number | string;
}

export interface SuccessResponse {
    isError: false;
    message: string;
    exercise: IExercise;
}

export interface ErrorResponse {
    isError: true;
    message: string;
}

export type PostExerciseResponse = SuccessResponse | ErrorResponse;

const PostExercise = async (
    exercise: ExercisePayload,
    headers: { [key: string]: string }
): Promise<PostExerciseResponse> => {

    if (!headers.authorization || !headers.session) return {
        message: 'No authorization headers',
        isError: true,
    };

    const validatedExercise = validateExercise(exercise);
    if (!validatedExercise) return {
        message: 'Invalid exercise',
        isError: true,
    };

    try {
        const { data } = await axiosInstance.post('/api/exercise', {
            exercise: validatedExercise
        }, { headers });

        return {
            message: data.message,
            isError: false,
            exercise: data.exercise
        };

    } catch (error:any) {
        return {
            message: error.message,
            isError: true,
        };
    } }

export default PostExercise
