import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.REACT_APP_API_URL || 'http://localhost:3500' ,
	headers: {
		'Content-Type': 'application/json',
	},
});


export default axiosInstance;

