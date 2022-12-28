import axiosInstance from '../configs/axios.config';

export type RegisterPayload = {
	email: string;
	password: string;
};

const Register = async ( payload:RegisterPayload ) => {
	const response = await axiosInstance.post('/api/auth/register', payload);
	if ( response.status !== 200 ) return null;
	const { data } = response;
	console.log({data});
	return data;
}


export default Register;
