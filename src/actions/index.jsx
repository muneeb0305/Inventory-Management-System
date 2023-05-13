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

//inventory
export const AddItems = (data) => {
    return {
        type: 'ADDITEM',
        payload: data
    }
}
export const DeleteItem = (id) => {
    return {
        type: 'DELETEITEM',
        payload: id
    }
}
export const UpdateItem = (data) => {
    return {
        type: 'UPDATEITEM',
        payload: data
    }
}
export const CountDecrease = (Item_name, itemCount) => {
    return {
        type: 'QUANTITY_COUNT_DECREASE',
        payload: { Item_name, itemCount }
    }
}
export const CountIncrease = (Item_name, itemCount) => {
    return {
        type: 'QUANTITY_COUNT_INCREASE',
        payload: { Item_name, itemCount }
    }
}

