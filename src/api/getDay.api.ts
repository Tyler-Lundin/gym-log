import axiosInstance from '../configs/axios.config';
import { IDay } from '../types';

type T = string | number;
type H = {
    [header: string]: any;
};
type R = {
    isError: boolean;
    message: string;
    day?: IDay;
}

const getDay = async (month:T, day:T, year:T, headers: H):Promise<R> => {
    try {
        const response = await axiosInstance.get(`/api/day/${month}/${day}/${year}`, { headers });
        if (response.status !== 200) return { isError: true, message: response.data.message ?? 'Something went wrong fetching day!' };
        return {
            isError: false,
            message: response.data.message ?? 'Error fetching day!',
            day: response.data.day,
        };
    } catch (error: any) {
        console.log( { error } );
        return { isError: true, message: error.message ?? 'Something went wrong fetching day!' };
    }
}

export default getDay;
