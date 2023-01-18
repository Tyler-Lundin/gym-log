import { useAppDispatch, useAppSelector } from "../../hooks";
import { tomorrow, yesterday } from "../../store/day.slice";
import styles from "../../styles/dateSlider.module.css";
import useTheme from '../../hooks/useTheme';

const DateSlider = () => {
    const { date:D } = useAppSelector(state=>state.day);
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    const goYesterday = () => dispatch( yesterday() );
    const goTomrrow = () => dispatch( tomorrow() );

    const isBlack = theme.color === 'black';
    const containerClasses = [styles.dateSliderContainer, isBlack ? styles.black : styles.white].join(' ');

	return (
		<div className={containerClasses}>
            <button className={styles.dateSliderButton} onClick={goYesterday}>{"<<"}</button>
            <div className={styles.dateSliderDate}>
			    <p>
				    {`${D.month}/${D.day}/${D.year}`}
			    </p>
            </div>
            <button className={styles.dateSliderButton} onClick={goTomrrow}>{">>"}</button>
		</div>
	);
};

export default DateSlider;



