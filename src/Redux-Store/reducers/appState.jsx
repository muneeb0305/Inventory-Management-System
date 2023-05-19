const initialState = {
    isDelete: false,
    isAdded: false,
    changeName: [],
    open: false
}
const appState = (state = initialState, action) => {
    switch (action.type) {
        case 'Deleted':
            return { ...state, isDelete: !state.isDelete }
        case 'Sidebar':
            return { ...state, open: !state.open }
        case 'Added':
            return { ...state, isAdded: !state.isAdded }
        case 'ChangeName':
              return { ...state, changeName: [action.payload] };
        default:
            return state

    }
}
export default appState