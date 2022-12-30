import { createSlice } from "@reduxjs/toolkit";
import {dark, Theme} from "../components/settings/themes";

interface AppState {
	isNavOpen: boolean;
	isSettingsOpen: boolean;
    isAddExerciseOpen: boolean;
	settings: {
		theme: Theme;
		language: string;
	};
}

const localStorageTheme = localStorage.getItem('theme');

const initialState: AppState = {
	isNavOpen: false,
	isSettingsOpen: false,
    isAddExerciseOpen: false,
	settings: {
		theme: localStorageTheme ? JSON.parse(localStorageTheme) as Theme : dark ,
		language: "en",
	},
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
        resetApp: () => initialState,
		openNav(state) { state.isNavOpen = true; },
		closeNav(state) { state.isNavOpen = false; state.isSettingsOpen = false; },
		openSettings(state) { state.isSettingsOpen = true; },
		closeSettings(state) { state.isSettingsOpen = false; },
        openAddExercise(state) { state.isAddExerciseOpen = true; },
        closeAddExercise(state) { state.isAddExerciseOpen = false; },
		setTheme(state, action) {
			console.log( action.payload );
            // how do I save the theme to the browser's local storage?
            localStorage.setItem('theme', JSON.stringify(action.payload));
			state.settings = { ...state.settings, theme: action.payload };
		}
	},
});

export const { resetApp, openNav, closeNav, openSettings, closeSettings, openAddExercise, closeAddExercise, setTheme } = appSlice.actions;

export default appSlice.reducer;
