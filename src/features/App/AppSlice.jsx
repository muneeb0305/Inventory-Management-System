import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'AppState',
    initialState: {
        changeName: [],
        open: false,
        darkMode: false
    },
    reducers: {
        Sidebar: state => {
            return { ...state, open: !state.open }
        },
        changeName: (state, action) => {
            return { ...state, changeName: [action.payload] };
        },
        DarkMode: state => {
            return { ...state, darkMode: !state.darkMode }
        },
    }
})

export const { Sidebar, changeName, DarkMode } = appSlice.actions
export default appSlice.reducer