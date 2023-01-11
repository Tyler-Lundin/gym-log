import { createSlice } from "@reduxjs/toolkit";


export interface ITagState {
    newTag: {
        label: string;
        theme: string;
    };
    targetID: string;
    isLoading: boolean;
    isError: boolean;
    message: string;
}

const initialState: ITagState = {
    newTag: {
        label: '',
        color: '',
    },
    targetID: '',
    isLoading: false,
    isError: false,
    message: '',
}




