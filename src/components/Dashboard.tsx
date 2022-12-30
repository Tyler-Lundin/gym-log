import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import useAuth from '../hooks/useAuth';
import getDayThunk from '../store/thunks/getDay.thunk';
import styles from '../styles/dashboard.module.css';
import Day from './Day';
import Navigation from './Navigation';

const useDay = () => {
    const { isAuth, headers } = useAuth();
    const dispatch = useAppDispatch();
    const { date, isLoading, isError, dayId } = useAppSelector(state => state.day);
    const { month, day, year } = date;

    useEffect(()=>{
        if (isAuth && !isLoading) {
            console.log('fetching day mah boy');
            dispatch( getDayThunk(headers));
        }
    },[]);

    return {
        day,
        dayId,
        month,
        year,
        isLoading,
        isError,
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
