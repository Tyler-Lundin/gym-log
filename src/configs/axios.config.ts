import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3500' || import.meta.env.REACT_APP_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});


export default axiosInstance;

