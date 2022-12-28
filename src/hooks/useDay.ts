import { useEffect, useState } from "react";
import axiosInstance from "../configs/axios.config";
import useAuth from "./useAuth";

export type exercisePayload = {
    type: string;
    time: string;
    exercise: string;
    weight: number | string;
    reps: number | string;
    tags: { label: string; color: string; }[];
}



const useDay = ( date: { year: number; month: number; day: number; } ) => {
    const [day, setDay] = useState<exercisePayload[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [refresh, setRefresh] = useState<boolean>(false);

    const { headers } = useAuth();

    const getDay = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/api/${date.year}/${date.month}/${date.day}`, { headers });
            setDay(response.data);
            setLoading(false);
        } catch (error:any) {
            setError(error.response.data.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getDay();
    }, [refresh]);

    return { day, loading, error, getDay, setRefresh };
}

export default useDay;
