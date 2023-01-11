import { useAppDispatch, useAppSelector } from ".";
import { setDate } from "../store/day.slice";


const useDateSlider = () => {
    const dispatch = useAppDispatch();
    const { date: SelectedDate } = useAppSelector(state=>state.day);
    if (!SelectedDate) dispatch (setDate(new Date()));


    return {

    }
}

export default useDateSlider;
