import styles from "../styles/infocard.module.css";


const Hero = () => {


	return (
		<div id='info-card-container' className={styles.infoCardContainer}>
			<p id="">
               Welcome
			</p>
			<div className={styles.infoGroup}>
				<p id="diggity-dog-this-is-the-signature">
					Created by{" "}
					<a href="" target="_blank">
						@tylerlundin
					</a>
				</p>
			</div>
		</div>
	);
};

export default Hero;
