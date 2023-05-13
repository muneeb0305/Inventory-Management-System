import axios from "axios";
import Store from '../Store'

const Inventory = {

    getItem: () => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get(`http://localhost:8080/inventory/viewitems`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    viewItem: (id) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get(`http://localhost:8080/inventory/viewitems/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    addItem: (Data) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.put(`http://localhost:8080/inventory/add`, Data, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    updateItem: (id,Data) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.post(`http://localhost:8080/inventory/update/${id}`, Data, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    deleteItem: (id) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.delete(`http://localhost:8080/inventory/delete/${id}`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
}
export default Inventory