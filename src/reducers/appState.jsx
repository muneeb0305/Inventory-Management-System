const initialState = {
    isDelete: false,
    isAdded: false
}
const appState = (state = initialState, action) => {
    switch (action.type) {
        case 'Deleted':
            return {...state, isDelete: !state.isDelete}
        case 'Added':
            return {...state, isAdded: !state.isAdded}
        default:
            return state

    }
}
export default appState