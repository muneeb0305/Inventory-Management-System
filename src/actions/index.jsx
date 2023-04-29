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