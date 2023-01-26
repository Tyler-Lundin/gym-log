import { useAppDispatch, useAppSelector } from "../../hooks";
import { tomorrow, yesterday, today } from "../../store/day.slice";
import styles from "../../styles/daySelector.module.css";
import useTheme from '../../hooks/useTheme';
import { useState } from "react";
import { openEvents } from "../../store/app.slice";

const useDayMenu = () => {

    const [isDateMenuOpen, setIsDateMenuOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);

    const { date:D } = useAppSelector(state=>state.day);
    const dispatch = useAppDispatch();
    const { theme, isBlack } = useTheme();

    const close = () => {
        if (isDateMenuOpen) setIsDateMenuOpen(false);
        if (isEventsOpen) setIsEventsOpen(false);
    }

    const handleClickDate = () => {
        isDateMenuOpen ? (dispatch(today()), close()) : setIsDateMenuOpen(true);
    }

    const handleClickEvents = () => {
        isEventsOpen ? close() : dispatch(openEvents());
    }

    const goYesterday = () => dispatch( yesterday() );
    const goTomrrow = () => dispatch( tomorrow() );

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
        <button onClick={handleClickDate} children={mmDDYYYY(todayDate)}
        className={`
            ${buttonClasses} ${styles.today} ${isDateMenuOpen ? styles.todayOpen :`${styles.todayClosed} ${isBlack ? 'border-solid border-black border-1 border-l-0' : 'border-l-0 border-solid border-white border-1' }`}
            rounded-l-none focus:outline-none
            ${isDateMenuOpen ? '' : 'absolute left-0 top-1/2 -translate-y-1/2'}
        `}
        />
    )

    const eventsButton = () => (
        <button
            onClick={handleClickEvents}
            className={`
                absolute text-2xl right-0 top-1/2 rounded-r-none -translate-y-1/2
                ${buttonClasses}
                ${isBlack ? 'border-solid border-black border-1 border-r-0'
                          : 'border-r-0 border-solid border-white border-1'
                 }
            `}
        >
            exercise
        </button>
    )

    return {
        containerClasses,
        buttonClasses,
        todayButton,
        yesterdayButton,
        tomorrowButton,
        isDateMenuOpen,
        close,
        eventsButton,
        theme,
    };
}

const DayMenu = () => {
    const {
        containerClasses,
        todayButton,
        yesterdayButton,
        tomorrowButton,
        isDateMenuOpen,
        close,
        eventsButton,
        theme,
    } = useDayMenu();




	return (
		<div id='day-menu-container' className={`${containerClasses} h-20 relative`} style={{background: theme.b}}>
            { isDateMenuOpen && <div id='day-selector-blur-bg' className='absolute top-full h-screen z-20 left-0 w-full ' onClick={close}/> }
            { isDateMenuOpen && yesterdayButton()}
            {todayButton()}
            { isDateMenuOpen && tomorrowButton()}
            { !isDateMenuOpen && eventsButton() }
		</div>
	);
};

export default DayMenu;



