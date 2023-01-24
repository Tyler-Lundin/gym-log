import { useAppDispatch, useAppSelector } from "../../hooks";
import { tomorrow, yesterday, today } from "../../store/day.slice";
import styles from "../../styles/daySelector.module.css";
import useTheme from '../../hooks/useTheme';
import { useState } from "react";

const useDaySelector = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { date:D } = useAppSelector(state=>state.day);
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    const closeMenu = () => setIsMenuOpen(false);

    const handleClick = () => {
        isMenuOpen ? (dispatch(today()), closeMenu()) : setIsMenuOpen(true);
    }




    const goYesterday = () => dispatch( yesterday() );
    const goTomrrow = () => dispatch( tomorrow() );

    const isBlack = theme.color === 'black';
    const containerClasses = [styles.daySelectorContainer, `${isBlack ? 'border-black' : 'border-white'}`].join(' ');
    const buttonClasses = [styles.daySelectorButton, isBlack ? styles.black : styles.white].join(' ');
    const todayDate = new Date(`${D.month}/${D.day}/${D.year}`);
    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const mmDDYYYY = (date: Date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        if (month < 10 && day < 10) return `0${month}/0${day}/${year}`;
        if (month < 10) return `0${month}/${day}/${year}`;
        if (day < 10) return `${month}/0${day}/${year}`;
        return `${month}/${day}/${year}`;
    }

    const yesterdayButton = () => (<button className={`${buttonClasses} ${styles.yesterday}`} onClick={goYesterday} children={mmDDYYYY(yesterdayDate)} />)
    const tomorrowButton = () => (<button className={`${buttonClasses} ${styles.tomorrow}`} onClick={goTomrrow} children={mmDDYYYY(tomorrowDate)} />)

    const todayButton = () => (
        <button
            className={`${buttonClasses} ${styles.today} ${isMenuOpen ? styles.todayOpen :`${styles.todayClosed} ${isBlack ? 'border-solid border-black border-2 border-l-0' : 'border-l-0 border-solid border-white border-2'}`}
            rounded-l-none focus:outline-none $`}
            onClick={handleClick} children={mmDDYYYY(todayDate)} />
        )

    return {
        containerClasses,
        buttonClasses,
        todayButton,
        yesterdayButton,
        tomorrowButton,
        isMenuOpen,
        closeMenu,
    };
}

const DaySelector = () => {
    const {
        containerClasses,
        todayButton,
        yesterdayButton,
        tomorrowButton,
        isMenuOpen,
        closeMenu,
    } = useDaySelector();


	return (
		<div className={containerClasses}>
            { isMenuOpen && <div id='day-selector-blur-bg' className='absolute top-full h-screen z-20 left-0 w-full ' onClick={closeMenu}/> }
            { isMenuOpen && yesterdayButton()}
            {todayButton()}
            { isMenuOpen && tomorrowButton()}
		</div>
	);
};

export default DaySelector;



