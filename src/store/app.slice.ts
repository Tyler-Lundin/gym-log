import { createSlice } from "@reduxjs/toolkit";
import {dark, Theme} from "../components/settings/themes";

interface AppState {
	isNavOpen: boolean;
	isSettingsOpen: boolean;
	settings: {
		theme: Theme;
		language: string;
	};
}

const initialState: AppState = {
	isNavOpen: false,
	isSettingsOpen: false,
	settings: {
		theme: { ...dark },
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
		setTheme(state, action) {
			console.log( action.payload );
			state.settings = { ...state.settings, theme: action.payload };
		}
	},
});

export const { resetApp, openNav, closeNav, openSettings, closeSettings, setTheme } = appSlice.actions;

export default appSlice.reducer;
