import axiosInstance from "../configs/axios.config"
import validateExercise from "../util/validateExercise";

type exercisePayload = {
    dayId: string,
    time: string;
    tags: { label: string; color: string; }[];
    exercise: string;
    weight: number | string;
    reps: number | string;
}

export type returnSuccess = { isError: false, message: string, exercise: exercisePayload }
export type returnError = { isError: true, message: string, exercise: [] }


const PostExercise = async (exercise: exercisePayload, headers:{[key:string]:string}):Promise<returnSuccess | returnError> => {
    if (!headers.authorization || !headers.session) return { message: 'No authorization headers', isError: true, exercise: [] };

    const newExercise = validateExercise(exercise);
    if (!newExercise) return { message: 'Invalid exercise', isError: true, exercise: [] };

    try {
        const response = await axiosInstance.post('/api/exercise', { exercise: newExercise }, { headers })
        return { message: response.data.message, isError: false, exercise: response.data.exercise };
    } catch (error:any) {
        return { message: error.message, isError: true, exercise: [] };
    }
}

export default PostExercise
