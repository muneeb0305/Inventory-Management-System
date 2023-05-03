const initialState = {
    isAuthenticate: false,
    isLogged: false,
    token: null,
    role:null
}
const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGINSUCESS':
            return { ...state, isAuthenticate: true, isLogged: true, token: action.payload.token, role: action.payload.role }
        case 'LOGOUT':
            sessionStorage.clear()
            return state = initialState;
        default:
            return state

    }
}
export default Auth