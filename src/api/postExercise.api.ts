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

const PostExercise = async (exercise: exercisePayload, headers:{[key:string]:string}, ) => {
    if (!headers.authorization || !headers.session) return;

    const newExercise = validateExercise(exercise);
    console.log('newExercise', newExercise);
    if (!newExercise) return;

    try {
        const response = await axiosInstance.post('/api/exercise', newExercise, { headers })
        return response
    } catch (error:any) {
        console.log( error.response.data.message );
        return 'error creating exercise - PostExercise.api line 24';
    }
}

export default PostExercise
