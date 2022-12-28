import { useEffect, useState } from 'react';
import axiosInstance from '../configs/axios.config';
import useAuth from '../hooks/useAuth';
import styles from '../styles/dashboard.module.css';
import Day from './Day';
import Navigation from './Navigation';

const useDay = () => {
    const { isAuth, headers } = useAuth();
    const [day, setDay] = useState({
        dayId: '',
        weekday: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
        date: /* as mm/dd/yyyy */ `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
    });
    console.log( {day} );

    const getDay = async () => {
        try {
            console.log( { isAuth, headers } );
            const response = await axiosInstance.get('/api/day', { headers });
            if ( response.status === 200 ) {
                setDay(response.data);
            }
            console.log( { response } );
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(()=>{
        console.log( { isAuth } );
        if (isAuth) getDay();
    },[]);

    return {
        day,
        setDay,
    };
};

const Dashboard = () => {

    useDay();

	return (
		<div id='dashboard-container' className={styles.dashboardContainer} >
			<Day />
			<Navigation />
		</div>
	)
}


export default Dashboard
