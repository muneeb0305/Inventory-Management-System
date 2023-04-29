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