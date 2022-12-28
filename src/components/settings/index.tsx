import { RiSettings5Fill, RiArrowGoBackFill } from "react-icons/ri";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setTheme, openSettings, closeSettings } from "../../store/app.slice";
import styles from "../../styles/settings.module.css";
import {dark, light, fire, water, grass, electric, poison, ground, Theme } from "./themes";

const useSettings = () => {
	const dispatch = useAppDispatch();
	const { settings, isSettingsOpen } = useAppSelector((state) => state.app);
	const open = () => dispatch(openSettings());
	const close = () => dispatch(closeSettings());

    const themes = {
        'dark': dark,
        'light': light,
        'fire': fire,
        'water': water,
        'grass': grass,
        'electric': electric,
        'poison': poison,
        'ground': ground,
    };

    const handleThemeChange = (e: any) => {
        e.preventDefault();
        dispatch(setTheme(themes[e.target.value as keyof typeof themes]));
    }

	return {
		isSettingsOpen,
		open,
		close,
        handleThemeChange,
        settings,
	};
};

const Settings = () => {

	const {
		isSettingsOpen,
		open,
		close,
        handleThemeChange,
        settings,
	} = useSettings();


	const renderThemeSetting = () => (
            <div className={styles.setting}>
				<label>Theme</label>
				<select defaultValue={settings.theme.name} onChange={handleThemeChange}>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
				</select>
			</div>
    )


	return (
		<>
			{isSettingsOpen ? (
				<div id="settings" className={styles.settingsContainer}>
					<button className={styles.backButton} onClick={close}>
                        <RiArrowGoBackFill color='white' size={30}/>
					</button>
					{renderThemeSetting()}
				</div>
			) : (
				<button
					onClick={open}
					className={styles.toggleSettingsButton}
				>
					<RiSettings5Fill size={"40px"} color="white"/>
				</button>
			)}
		</>
	);
};

export default Settings;
