import { useTheme } from '../../hooks';
import useDaySelector from '../../hooks/useDaySelector';
import DaySelector from './DaySelector';
import Navigation from './Navigation';

const useTopMenu = () => {
    const { theme } = useTheme();
    const { isDaySelectorOpen } = useDaySelector();

    return {
        theme,
        isDaySelectorOpen,
    }
}

const TopMenu = () => {
    const {
        theme,
        isDaySelectorOpen,
    } = useTopMenu();
    const c = theme.color;
    const n = c === 'black' ? 'white' : 'black';

    return (
        <div className={`absolute h-20 top-0 left-0 w-screen z-40 shadow-${c} shadow-md`} style={{background:theme.b}}>
            <DaySelector />
            { !isDaySelectorOpen && <Navigation /> }
        </div>
    )
}

export default TopMenu;
