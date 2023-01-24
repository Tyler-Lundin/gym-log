import { AiOutlineArrowLeft } from "react-icons/ai";
import useTheme from '../../hooks/useTheme';
import { useAppDispatch } from "../../hooks";
import { closeEvents, openAddExercise } from "../../store/app.slice";
import { GiMuscleUp, GiBananaBunch, GiNightSleep, GiDrinking } from "react-icons/gi";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { IoScale } from 'react-icons/io5';

const Events = () => {
    const eventOptions = [
        { name: 'Exercise', icon: <GiMuscleUp />, onClick: () => dispatch( openAddExercise() ) },
        { name: 'Food', icon: <GiBananaBunch />, onClick: () => console.log('Food') },
        { name: 'Mood', icon: <TbMoodCrazyHappy />, onClick: () => console.log('Mood') },
        { name: 'Sleep', icon: <GiNightSleep />, onClick: () => console.log('Sleep') },
        { name: 'Weight', icon: <IoScale />, onClick: () => console.log('Weight') },
        { name: 'Water', icon: <GiDrinking />, onClick: () => console.log('Water') },
    ];

    const dispatch = useAppDispatch();
    const goBack = () => dispatch( closeEvents() );
    const { useThemeByName, theme } = useTheme();
    const themeByName = useThemeByName(theme.name);
    const isBlack = themeByName.color === 'black';


    return (
        <div className='h-full text-center box-border grid'>
            <button className={`absolute text-3xl rounded-l-none my-4 ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={goBack}>
                <AiOutlineArrowLeft />
            </button>
            <div id='events-options-container' className={`grid mt-24 gap-1`}>
                {eventOptions.map(({name, icon, onClick}) => (
                    <button key={name}
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
