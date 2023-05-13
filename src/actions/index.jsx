//AuthenticateUser
export const LoginSuccess = (token,role) => {
    return {
        type: 'LOGINSUCESS',
        payload: {token, role}
    }
}
export const Logout = () => {
    return {
        type: 'LOGOUT',
    }
}