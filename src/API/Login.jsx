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
                const err = error.response.data
                throw err
            });
    },
    checkToken: (token) => {
        return axios.post(`http://localhost:8080/user/checktoken`, token)
            .then(res => {
                const response = res.data.Authorization
                const token = response && response.split(' ')[1];
                const decode = jwtDecode(token)
                const role = decode.Role
                return [token, role]
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    addUser: (Data) => {
        return axios.put(`http://localhost:8080/user/add`, Data)
            .then(res => {
                return res
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
}
export default Login