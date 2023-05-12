import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjY0NWNhZDI5MjUzZmQ4ZThkMjk4MWRjOSIsIlJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4MzkxMzg0MywiZXhwIjoxNjgzOTE1NjQzfQ.u9el3mqPjlyBERdCtm8J_DDD1SLrNhp2ksgDw2e8lVM'
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

const Orders = {
    getAdminCardData: () => {
        return axios.get("http://localhost:8080/order/admin_cards", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    getRecentOrders: () => {
        return axios.get("http://localhost:8080/order/recent_orders", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    getOrderDetails: () => {
        return axios.get("http://localhost:8080/order/details", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    deleteOrder: (id) => {
        return axios.delete(`http://localhost:8080/order/delete/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    updateOrder: (id) => {
        return axios.delete(`http://localhost:8080/order/update/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    OrderbyId: (id) => {
        return axios.get(`http://localhost:8080/order/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    addOrder: (Data) => {
        return axios.put(`http://localhost:8080/order/add`,Data, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    customerOrder: () => {
        return axios.get(`http://localhost:8080/order/customer_order`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    customerCard: () => {
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