import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { closeDaySelector, openDaySelector } from "../store/app.slice";
import { today, tomorrow, yesterday } from "../store/day.slice";
import mmDDYYYY from "../util/mmDDYYYY";
import useTheme from './useTheme';

const useDaySelector = () => {
    const { date:D } = useAppSelector(state=>state.day);
    const { isDaySelectorOpen } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    const [isVisible,setIsVisible] = useState(false);


    const handleClose = () => {
        if (isDaySelectorOpen) dispatch(closeDaySelector());
    }

    const handleToday = () => isDaySelectorOpen ? (dispatch(today()), handleClose()) : dispatch(openDaySelector());
    const handleYesterday = () => dispatch( yesterday() );
    const handleTomorrow = () => dispatch( tomorrow() );

    const dates = {
        today: mmDDYYYY(new Date(`${D.month}/${D.day}/${D.year}`)),
        yesterday: mmDDYYYY(new Date(new Date(`${D.month}/${D.day}/${D.year}`).setDate(new Date(`${D.month}/${D.day}/${D.year}`).getDate() - 1))),
        tomorrow: mmDDYYYY(new Date(new Date(`${D.month}/${D.day}/${D.year}`).setDate(new Date(`${D.month}/${D.day}/${D.year}`).getDate() + 1))),
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape') handleClose();
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        if (isDaySelectorOpen) setIsVisible(true);
        else setTimeout(()=>setIsVisible(false), 300);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isDaySelectorOpen]);

    return {
        isDaySelectorOpen,
        handleToday,
        handleYesterday,
        handleTomorrow,
        handleClose,
        theme,
        dates,
        isVisible,
    };
}

export default useDaySelector;
