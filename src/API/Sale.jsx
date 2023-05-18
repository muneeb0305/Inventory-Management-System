import axios from "axios";
import Store from '../Redux-Store/Store'


const Sale = {
    getSaleCardData: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get("http://localhost:8080/sale/salecard", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    getCityOrders: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get("http://localhost:8080/sale/salebycities", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
}

export default Sale