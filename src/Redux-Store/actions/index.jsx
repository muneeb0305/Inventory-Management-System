import { type } from "@testing-library/user-event/dist/type"

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
//Recent Orders
export const isDeleted = () => {
    return {
        type: 'Deleted',
    }
}
export const isAdded = () => {
    return {
        type: 'Added',
    }
}
//Breadcrumbs
export const changeName=(payload)=>{
    return{
        type: 'ChangeName',
        payload: payload
    }
}
//sidebar
export const Sidebar=()=>{
    return{
        type: 'Sidebar',
    }
}