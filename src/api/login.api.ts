import axiosInstance from '../configs/axios.config';

export type LoginPayload = {
	email: string;
	password: string;
};

const Login = async ( payload:LoginPayload ) => {
	const response = await axiosInstance.post('/api/auth/login', payload);
	if ( response.status !== 200 ) return null;
	const { data } = response;
	console.log({data});
	return data;
}


export default Login;
