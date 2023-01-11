import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../../styles/404.module.css';

const FourZeroFour = () => {
	const location = useLocation();
	const navTo = useNavigate();

	useEffect(()=>{
		console.log(location);
	},[]);

	const buttonOnClick = (e:any) => {
		e.preventDefault();
		navTo('/');
	};

	return (
		<div className={styles.container}>
             We can't find a path named <code>{location.pathname}</code>
			🤔😯
			<button
				onClick={buttonOnClick}
			> Return Home </button>
		</div>
	)
}


export default FourZeroFour;
