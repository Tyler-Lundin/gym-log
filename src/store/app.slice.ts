import { createSlice } from "@reduxjs/toolkit";
import {dark, Theme} from "../components/settings/themes";

interface AppState {
	isNavOpen: boolean;
	isSettingsOpen: boolean;
    isAddExerciseOpen: boolean;
    isAddExerciseTagOpen: boolean;
    isEventsOpen: boolean;
    selectedEvent: 'exercise' | 'food' | 'sleep' | 'weight' | 'mood' | 'note' | 'journal' | 'meditation' | 'water'
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
    isAddExerciseTagOpen: false,
    isEventsOpen: false,
    selectedEvent: 'exercise',
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
        openAddExercise(state) { state.isAddExerciseOpen = true; state.isEventsOpen = false; },
        closeAddExercise(state) { state.isAddExerciseOpen = false; },
        openAddTag(state) { state.isAddExerciseTagOpen = true; },
        closeAddTag(state) { state.isAddExerciseTagOpen = false; },
        openEvents(state) { state.isEventsOpen = true; },
        closeEvents(state) { state.isEventsOpen = false; },
        setSelectedEvent(state, action) { state.selectedEvent = action.payload; },
		setTheme(state, action) {
			console.log( action.payload );
            // how do I save the theme to the browser's local storage?
            localStorage.setItem('theme', JSON.stringify(action.payload));
			state.settings = { ...state.settings, theme: action.payload };
		},
        setLanguage(state, action) { state.settings = { ...state.settings, language: action.payload }; }
	},
});


// todo: change open / close to set
export const {
    resetApp,
    openNav,
    closeNav,
    openSettings,
    closeSettings,
    openAddExercise,
    closeAddExercise,
    openAddTag,
    closeAddTag,
    openEvents,
    closeEvents,
    setSelectedEvent,
    setTheme,
    setLanguage,
} = appSlice.actions;

export default appSlice.reducer;
