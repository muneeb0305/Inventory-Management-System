import axios from "axios";
import Store from '../Redux-Store/Store'


const Orders = {
    getAdminCardData: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get("http://localhost:8080/order/admin_cards", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    getRecentOrders: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get("http://localhost:8080/order/recent_orders", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    getOrderDetails: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get("http://localhost:8080/order/details", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    deleteOrder: (id) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.delete(`http://localhost:8080/order/delete/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    updateOrder: (id, Data) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.post(`http://localhost:8080/order/update/${id}`, Data, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    OrderbyId: (id) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get(`http://localhost:8080/order/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    addOrder: (Data) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.put(`http://localhost:8080/order/add`, Data, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    customerOrder: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get(`http://localhost:8080/order/customer_order`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    },
    customerCard: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get(`http://localhost:8080/order/customer_cards`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                throw err
            });
    }
}

export default Orders