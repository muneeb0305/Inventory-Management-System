import axios from "axios";
import Store from '../Store'


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
                throw error
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
                throw error
            });
    },
}

export default Sale