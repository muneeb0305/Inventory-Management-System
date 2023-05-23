import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'AppState',
    initialState: {
        changeName: [],
        open: false
    },
    reducers: {
        Sidebar: state => {
            return { ...state, open: !state.open }
        },
        changeName: (state, action) => {
            return { ...state, changeName: [action.payload] };
        }
    }
})

export const { Sidebar, changeName } = appSlice.actions
export default appSlice.reducer