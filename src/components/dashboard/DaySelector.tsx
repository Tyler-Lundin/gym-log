import useDaySelector from "../../hooks/useDaySelector";


const DaySelector = () => {
    const {
        isDaySelectorOpen,
        handleClose,
        theme,
        handleYesterday,
        handleToday,
        handleTomorrow,
        dates,
        isVisible,
    } = useDaySelector();

    const c = theme.color;
    const n = c === 'black' ? 'white' : 'black';

    console.log( { c, n } );

    const buttonClasses = `
        transition-all
        bg-${c} text-${n} absolute top-4 left-4 rounded-3xl px-8
        hover:opacity-50 focus:opacity-50
        focus:scale-110 transition-all duration-300 ease-in-out
    `

    const yesterdayClasses = isDaySelectorOpen ? `left-1/4 -translate-x-3/4 px-4 w-fit rounded-r-md` : 'opacity-0 pointer-events-none'
    const todayClasses = isDaySelectorOpen ? 'left-1/2 -translate-x-1/2 px-2 w-fit rounded-md' : ''
    const tomorrowClasses = isDaySelectorOpen ? `left-3/4 -translate-x-1/4 px-4 w-fit rounded-l-md` : 'opacity-0 pointer-events-none'


    const yesterdayButton = () => (<button className={`${buttonClasses} ${yesterdayClasses}`}  onClick={handleYesterday} children={dates.yesterday} />)
    const todayButton = () => (<button className={`${buttonClasses} ${todayClasses}`} onClick={handleToday} children={isDaySelectorOpen ? 'go to today' : dates.today}  />)
    const tomorrowButton = () =>  (<button className={`${buttonClasses} ${tomorrowClasses}`} onClick={handleTomorrow} children={dates.tomorrow} />)


	return (
		<div className={` h-20 relative  w-full place-items-center`} style={{background: theme.b}}>
            { isVisible && yesterdayButton()}
            {todayButton()}
            { isVisible && tomorrowButton()}
            { isDaySelectorOpen && <div id='day-selector-blur-bg' className='absolute top-full h-screen z-20 left-0 w-full ' onClick={handleClose}/> }
		</div>
	);
};

export default DaySelector;

