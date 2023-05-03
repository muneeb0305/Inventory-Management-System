import UserData from "../data/UserData";

const initialState = UserData
const Users = (state = initialState, action) => {
    switch (action.type) {
        case 'USERAUTHENTICATE':
            return state.filter((user) => {
                const email = user.email
                const password = user.password
                const type = user.type
                if (user.token && email === action.payload.email && password === action.payload.password && type === action.payload.type) {
                    sessionStorage.setItem("token", user.token);
                    sessionStorage.setItem("User", JSON.stringify(user.type));
                    return state
                }
                return state
            })

        case 'REGISTRATION':
            const { id, customer_Name, email, password, type } = action.payload;
            const newUser = {
                id,
                customer_Name,
                email,
                password,
                type,
                token: Date.now()
            };
            return [...state, newUser]
        default:
            return state;
    }
}
export default Users