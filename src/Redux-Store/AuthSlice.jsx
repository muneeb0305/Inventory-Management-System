import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isAuthenticate: false,
    isLogged: false,
    token: null,
    role: null
}
export const authSlice = createSlice({
    name: 'AuthState',
    initialState,
    reducers: {
        LoginSuccess: (state, action) => {
            sessionStorage.setItem('token', action.payload.token)
            return { ...state, isAuthenticate: true, isLogged: true, token: action.payload.token, role: action.payload.role }
        },
        Logout: state => {
            sessionStorage.clear()
            return state = initialState;
        },
    }
})

export const { LoginSuccess, Logout } = authSlice.actions
export default authSlice.reducer
