import { RiSettings5Fill, RiArrowGoBackFill } from "react-icons/ri";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setTheme, openSettings, closeSettings, setLanguage } from "../../store/app.slice";
import styles from "../../styles/settings.module.css";
import {dark, light, fire, water, grass, electric, poison, ground, ice } from "./themes";

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
        'ice': ice,
    };

    const handleThemeChange = (e: any) => {
        e.preventDefault();
        dispatch(setTheme(themes[e.target.value as keyof typeof themes]));
    }

    const handleLanguageChange = (e: any) => {
        e.preventDefault();
        dispatch(setLanguage(e.target.value));
    }

    const renderThemeOptions = () => {
        return Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
                {theme}
            </option>
        ));
    }

	return {
		isSettingsOpen,
		open,
		close,
        handleThemeChange,
        settings,
        handleLanguageChange,
        renderThemeOptions,
	};
};

const Settings = () => {

	const {
		isSettingsOpen,
		open,
		close,
        handleThemeChange,
        settings: { theme },
        renderThemeOptions,
	} = useSettings();

    const settingClasses = [styles.setting, theme.color === 'black' ? styles.black : styles.white].join(' ');

	const renderThemeSetting = () => (
            <div className={settingClasses}>
				<label>Theme</label>
				<select defaultValue={theme.name} onChange={handleThemeChange}>
                    {renderThemeOptions()}
				</select>
			</div>
    )

    const c = theme.color;
    const isBlack = c === 'black';
    const n = c === 'black' ? 'white' : 'black';
	return (
		<>
			{isSettingsOpen ? (
				<div id="settings" className={styles.settingsContainer} style={{backgroundColor: theme.a}}>
					<button className={isBlack ? styles.blackBackButton : styles.whiteBackButton} onClick={close}>
                        <RiArrowGoBackFill color='inherit' size={30}/>
					</button>
					{renderThemeSetting()}
				</div>
			) : (
				<button
					onClick={open}
					className={styles.toggleSettingsButton}
				>
					<RiSettings5Fill size={"40px"} color={n}/>
				</button>
			)}
		</>
	);
};

export default Settings;
