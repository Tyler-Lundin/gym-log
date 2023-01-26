import { AiOutlineArrowLeft } from "react-icons/ai";
import useTheme from '../../hooks/useTheme';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeEvents, setSelectedEvent } from "../../store/app.slice";
import { GiMuscleUp, GiBananaBunch, GiNightSleep, GiDrinking, GiStoneStack } from "react-icons/gi";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { IoScale, IoJournal } from 'react-icons/io5';

const Events = () => {
    const eventOptions = [
        { name: 'Exercise', icon: <GiMuscleUp />, onClick: () => dispatch( setSelectedEvent('exercise') ) },
        { name: 'Food', icon: <GiBananaBunch />, onClick: () => dispatch( setSelectedEvent('food') ) },
        { name: 'Mood', icon: <TbMoodCrazyHappy />, onClick: () => dispatch( setSelectedEvent('mood') ) },
        { name: 'Sleep', icon: <GiNightSleep />, onClick: () => dispatch(setSelectedEvent('sleep')) },
        { name: 'Weight', icon: <IoScale />, onClick: () => dispatch(setSelectedEvent('Weight')) },
        { name: 'Water', icon: <GiDrinking />, onClick: () => dispatch(setSelectedEvent('Water')) },
        { name: 'Meditate', icon: <GiStoneStack />, onClick: () => dispatch(setSelectedEvent('Meditate')) },
        { name: 'Journal', icon: <IoJournal />, onClick: () => dispatch(setSelectedEvent('Journal')) },
    ];

    const { selectedEvent } = useAppSelector(state=>state.app);
    const dispatch = useAppDispatch();
    const goBack = () => dispatch( closeEvents() );
    const { useThemeByName, theme } = useTheme();
    const themeByName = useThemeByName(theme.name);
    const isBlack = themeByName.color === 'black';

    const isActive = (name: string) => name.toLowerCase() === selectedEvent.toLowerCase();

    return (
        <div className='h-full text-center box-border grid'>
            <button className={`absolute text-3xl rounded-l-none my-4 ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={goBack}>
                <AiOutlineArrowLeft />
            </button>
            <div id='events-options-container' className={`grid mt-24 gap-1 overflow-y-auto mb-12 pb-12`}>
                {eventOptions.map(({name, icon, onClick}) => (
                    <button key={name}
                        disabled={name.toLowerCase() !== 'exercise'}
                        style={{filter: isActive(name) ? 'brightness(1.5)' : 'brightness(1)'}}
                        className='grid grid-flow-col-dense justify-start
                            items-center gap-8 w-full h-full text-3xl p-12
                            rounded-none' onClick={onClick}>
                        {icon}
                        <h3>{name}</h3>
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Events;
