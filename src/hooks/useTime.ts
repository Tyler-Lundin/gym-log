import { useState, useEffect } from 'react';

const useTime = () => {

	const [time, setTime] = useState( new Date() )
	const doubleDigitHours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
	const doubleDigitMinutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
	const doubleDigitSeconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000 * 60)
		return () => clearInterval(interval)
	}, [])

	return {
		time: ()=>`${doubleDigitHours}:${doubleDigitMinutes}:${doubleDigitSeconds}`,
		timeNoSeconds: ()=>`${doubleDigitHours}:${doubleDigitMinutes}`,

	}
}

export default useTime;
