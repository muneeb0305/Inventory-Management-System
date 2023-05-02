import UserData from "../data/UserData";

const initialState = UserData
const Users = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return state.filter((user) => {
                const email = user.email
                const password = user.password
                const type = user.type
                if (user.token && email === action.payload.email && password === action.payload.password && type === action.payload.type) {
                    localStorage.setItem("token", user.token);
                    localStorage.setItem("User", JSON.stringify(user.type));
                    return state
                }
                return state
            })
        case 'LOGOUT':
            localStorage.clear()
            return state;

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