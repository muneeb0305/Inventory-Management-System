//User
export const Login =(data)=>{
    return {
        type: 'LOGIN',
        payload: data
    }
}
export const Registration =(data)=>{
    return {
        type: 'REGISTRATION',
        payload: data
    }
}
export const Logout =()=>{
    return {
        type: 'LOGOUT',
    }
}


//inventory
export const AddItems =(data)=>{
    return {
        type: 'ADDITEM',
        payload: data
    }
}
export const DeleteItem =(id)=>{
    return {
        type: 'DELETEITEM',
        payload: id
    }
}
export const UpdateItem =(data)=>{
    return {
        type: 'UPDATEITEM',
        payload: data
    }
}
export const CountDecrease =(Item_name, itemCount)=>{
    return {
        type: 'QUANTITY_COUNT_DECREASE',
        payload: {Item_name, itemCount}
    }
}
export const CountIncrease =(Item_name, itemCount)=>{
    return {
        type: 'QUANTITY_COUNT_INCREASE',
        payload: {Item_name, itemCount}
    }
}

//Orders
export const AddOrder =(data)=>{
    return {
        type: 'ADDORDER',
        payload: data
    }
}
export const DeleteOrder =(ID)=>{
    return {
        type: 'DELETORDER',
        payload: ID
    }
}
export const UpdateOrder =(data)=>{
    return {
        type: 'UPDATEORDER',
        payload: data
    }
}