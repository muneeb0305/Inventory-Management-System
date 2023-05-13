import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = {
    loginSuccess: (User) => {
        return axios.post(`http://localhost:8080/user/login`, User)
            .then(res => {
                const response = res.data.Authorization
                const token = response && response.split(' ')[1];
                const decode = jwtDecode(token)
                const role = decode.Role
                return [token, role]
            })
            .catch(error => {
                throw error
            });
    },
    checkToken: (token) => {
        return axios.post(`http://localhost:8080/user/checktoken`, token)
            .then(res => {
                const response = res.data.Authorization
                const token = response && response.split(' ')[1];
                const decode = jwtDecode(token)
                const role = decode.Role
                return [token, role ]
            })
            .catch(error => {
                throw error
            });
    },
}
export default Login