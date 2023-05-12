import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjY0NWNhZDI5MjUzZmQ4ZThkMjk4MWRjOSIsIlJvbGUiOiJDdXN0b21lciIsImlhdCI6MTY4MzkxMzg0MywiZXhwIjoxNjgzOTE1NjQzfQ.u9el3mqPjlyBERdCtm8J_DDD1SLrNhp2ksgDw2e8lVM'
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};
const Inventory= {
    getItem: () => {
        return axios.get(`http://localhost:8080/inventory/viewitems`, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            });
    },
}
export default Inventory