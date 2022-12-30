import axiosInstance from '../configs/axios.config';

type H = { [header:string]: string | number };

const getDayExercises = async (dayId: string, headers: H) => {
    const response = await axiosInstance.get(`/api/exercise/${dayId}`, { headers });
    console.log( { response }, 'getDayExercises.api.ts' );
    return {
        isError: response.status === 200 ? false : true,
        exercises: response.data.exercises || [],
        message: response.data.message || 'Error fetching exercises!',
    };
};

export default getDayExercises;
