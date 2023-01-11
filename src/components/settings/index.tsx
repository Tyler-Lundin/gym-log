import { RiSettings5Fill, RiArrowGoBackFill } from "react-icons/ri";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setTheme, openSettings, closeSettings, setLanguage } from "../../store/app.slice";
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

    const handleLanguageChange = (e: any) => {
        e.preventDefault();
        dispatch(setLanguage(e.target.value));
    }

	return {
		isSettingsOpen,
		open,
		close,
        handleThemeChange,
        settings,
        handleLanguageChange,
	};
};

const Settings = () => {

	const {
		isSettingsOpen,
		open,
		close,
        handleThemeChange,
        settings: { theme, language },
        handleLanguageChange,
	} = useSettings();

    console.log( { language } );

    const settingClasses = [styles.setting, theme.color === 'black' ? styles.black : styles.white].join(' ');

	const renderThemeSetting = () => (
            <div className={settingClasses}>
				<label>Theme</label>
				<select defaultValue={theme.name} onChange={handleThemeChange}>
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

    const renderLanguageSetting = () => (
        <div className={settingClasses}>
            <label>Language</label>
            <select defaultValue={language} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value='fr'>French</option>
            </select>
        </div>
    )
    const isBlack = theme.color === 'black';
	return (
		<>
			{isSettingsOpen ? (
				<div id="settings" className={styles.settingsContainer} style={{backgroundColor: theme.a}}>
					<button className={isBlack ? styles.blackBackButton : styles.whiteBackButton} onClick={close}>
                        <RiArrowGoBackFill color='inherit' size={30}/>
					</button>
					{renderThemeSetting()}
                    {renderLanguageSetting()}
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
