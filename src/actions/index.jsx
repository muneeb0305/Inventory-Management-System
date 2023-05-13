//User
export const UserAuthenticate = (data) => {
    return {
        type: 'USERAUTHENTICATE',
        payload: data
    }
}
export const Registration = (data) => {
    return {
        type: 'REGISTRATION',
        payload: data
    }
}
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