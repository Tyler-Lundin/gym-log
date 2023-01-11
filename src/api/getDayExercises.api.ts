import axiosInstance from '../configs/axios.config';

type H = { [header:string]: string | number };

const getDayExercises = async (dayId: string, headers: H) => {
    try {
        const response = await axiosInstance.get(`/api/exercise/${dayId}`, { headers });
        return {
            isError: response.status === 200 ? false : true,
            exercises: response.data.exercises || [],
            message: response.data.message || 'Error fetching exercises!',
        };
    } catch (error: any) {
        console.log({ error });
        return { isError: true, exercises: [], message: error.message || 'Something went wrong fetching exercises!' };
    }
};

export default getDayExercises;
