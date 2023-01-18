import axiosInstance from "../configs/axios.config"
import { IExercise } from "../types";
import validateExercises from "../util/validateExercises";

export interface SuccessResponse {
    isError: false;
    message: string;
    exercises: IExercise[] | [];
}

export interface ErrorResponse {
    isError: true;
    message: string;
}

export type PostStagedExercisesResponse = Promise<SuccessResponse | ErrorResponse>;

const PostStagedExercises = async (exercises: IExercise[], headers:{[key:string]:string}):PostStagedExercisesResponse => {
    try {

        if (!headers.authorization || !headers.session) return {
            message: 'No authorization headers',
            isError: true
        };

        const validatedExercises = validateExercises(exercises);
        if (validatedExercises.length === 0) return { message: 'No valid exercises', isError: true };

        const { data }  = await axiosInstance.post('/api/exercise/staged', {
            exercises:validatedExercises
        }, { headers });

        return {
            message: data.message,
            isError: false,
            exercises: data.exercises
        };
    } catch (error:any) {
        return { message: error.message, isError: true };
    }
}

export default PostStagedExercises

