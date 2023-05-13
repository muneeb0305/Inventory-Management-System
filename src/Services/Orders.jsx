import axios from "axios";
import Store from '../Store'


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
                throw error
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
                throw error
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
                throw error
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
                throw error
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
                throw error
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
                throw error
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
                throw error
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
                throw error
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
                throw error
            });
    }
}

export default Orders