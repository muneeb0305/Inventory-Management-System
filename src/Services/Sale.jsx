import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.SGFzaGlyIEF6YW0.xeUStF84kk4_7avyBaA9cyrxyTDksxK_WFKYBddS7mU'
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

const Sale = {
    getSaleCardData: () => {
        return axios.get("http://localhost:8080/sale/salecard", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
    getCityOrders: () => {
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