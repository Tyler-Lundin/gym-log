import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from '../../configs/axios.config';

const getDay = createAsyncThunk(
	'getDay',
	async (date: string) => {
		const response = await axiosInstance.get(`/day/${date}`);
		return response.data;
	}
);

export default getDay;
