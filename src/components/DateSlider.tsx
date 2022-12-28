import { useState } from "react";
import styles from "../styles/dateSlider.module.css";

const DateSlider = () => {
	const [date, setDate] = useState(new Date());

	return (
		<div className={styles.dateSliderContainer}>
			<p>
				{date.toLocaleDateString("en-US", { weekday: "long" })}{" "}
				{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}
			</p>
		</div>
	);
};

export default DateSlider;



