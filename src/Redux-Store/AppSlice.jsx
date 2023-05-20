import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'AppState',
    initialState : {
        isDelete: false,
        isAdded: false,
        changeName: [],
        open: false
    },
  reducers: {
    isDeleted: state => {
        return { ...state, isDelete: !state.isDelete }
    },
    Sidebar: state => {
        return { ...state, open: !state.open }
    },
    isAdded: (state) => {
        return { ...state, isAdded: !state.isAdded }
    },
    changeName: (state, action) => {
        return { ...state, changeName: [action.payload] };
    }
    }
})

export const { isDeleted, Sidebar, isAdded, changeName } = appSlice.actions

export default appSlice.reducer