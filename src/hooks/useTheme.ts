import {
	light,
	dark,
	fire,
	water,
	grass,
	electric,
	poison,
	ground,
} from "../components/settings/themes";
import { useAppDispatch, useAppSelector } from ".";
import { setTheme } from "../store/app.slice";

const useTheme = () => {
	const { settings } = useAppSelector((state) => state.app);
	const { theme = dark } = settings;
	const dispatch = useAppDispatch();

	const setNewTheme = (themeName: string) => {
		switch (themeName) {
			case "light":
				dispatch(setTheme(light));
				break;
			case "dark":
				dispatch(setTheme(dark));
				break;
			case "fire":
				dispatch(setTheme(fire));
				break;
			case "water":
				dispatch(setTheme(water));
				break;
			case "grass":
				dispatch(setTheme(grass));
				break;
			case "electric":
				dispatch(setTheme(electric));
				break;
			case "poison":
				dispatch(setTheme(poison));
				break;
			case "ground":
				dispatch(setTheme(ground));
				break;
			default:
				dispatch(setTheme(dark));
		}
	};


    const useThemeByName = (themeName: string) => {
        switch (themeName) {
            case "light":
                return light;
            case "dark":
                return dark;
            case "fire":
                return fire;
            case "water":
                return water;
            case "grass":
                return grass;
            case "electric":
                return electric;
            case "poison":
                return poison;
            case "ground":
                return ground;
            default:
                return dark;
        }
    };

    const isBlack = theme.color === 'black';


	return {
        useThemeByName,
		theme,
        isBlack,
		setNewTheme,
	};
};


export default useTheme;
