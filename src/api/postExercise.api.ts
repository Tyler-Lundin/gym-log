import axiosInstance from "../configs/axios.config"
import validateExercise from "../util/validateExercise";
import { R } from '../types';

type exercisePayload = {
    dayId: string,
    time: string;
    tags: { label: string; color: string; }[];
    exercise: string;
    weight: number | string;
    reps: number | string;
}

const PostExercise = async (exercise: exercisePayload, headers:{[key:string]:string}):Promise<R> => {
    if (!headers.authorization || !headers.session) return { message: 'No authorization headers', isError: true, isLoading: false };

    const newExercise = validateExercise(exercise);
    if (!newExercise) return { message: 'Invalid exercise', isError: true, isLoading: false };

    try {
        const response = await axiosInstance.post('/api/exercise', { exercise: newExercise }, { headers })
        return { message: response.data.message, isError: false, isLoading: false, exercise: response.data.exercise };
    } catch (error:any) {
        return { message: error.response.data.message, isError: true, isLoading: false };
    }
}

export default PostExercise
