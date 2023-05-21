import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Store from './Store';
import axios from 'axios';

//Order Details
export const showOrders = createAsyncThunk(
    "showOrders",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Add Order
export const addOrder = createAsyncThunk(
    "addOrder",
    async (data, { rejectWithValue }) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.put(`http://localhost:8080/order/add`, data, config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);
//Update Order
export const updateOrder = createAsyncThunk(
    "updateOrder",
    async (data, { rejectWithValue }) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.post(`http://localhost:8080/order/update/${data[0]}`, data[1], config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);
//Delete Order
export const deleteOrder = createAsyncThunk(
    "deleteOrder",
    async (id, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Recent Orders
export const recentOrders = createAsyncThunk(
    "recentOrders",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Customer Orders
export const customerOrders = createAsyncThunk(
    "customerOrders",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Admin Card
export const adminCard = createAsyncThunk(
    "adminCard",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Customer Card
export const customerCard = createAsyncThunk(
    "customerCard",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Order by ID
export const orderbyId = createAsyncThunk(
    "orderbyId",
    async (id, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);


export const OrderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        userOrders: [],
        adminCard: [],
        orderbyId:[],
        customerCard: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        //Show Orders
        [showOrders.pending]: (state) => {
            state.loading = true;
        },
        [showOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        },
        [showOrders.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Delete Order
        [deleteOrder.pending]: (state) => {
            state.loading = true;
        },
        [deleteOrder.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [deleteOrder.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Recent Orders
        [recentOrders.pending]: (state) => {
            state.loading = true;
        },
        [recentOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        },
        [recentOrders.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //adminCard
        [adminCard.pending]: (state) => {
            state.loading = true;
        },
        [adminCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.adminCard = action.payload;
        },
        [adminCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //customerCard
        [customerCard.pending]: (state) => {
            state.loading = true;
        },
        [customerCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.customerCard = action.payload;
        },
        [customerCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Add Order
        [addOrder.pending]: (state) => {
            state.loading = true;
        },
        [addOrder.fulfilled]: (state) => {
            state.loading = false;
        },
        [addOrder.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Update Order
        [updateOrder.pending]: (state) => {
            state.loading = true;
        },
        [updateOrder.fulfilled]: (state) => {
            state.loading = false;
        },
        [updateOrder.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Customer Orders
        [customerOrders.pending]: (state) => {
            state.loading = true;
        },
        [customerOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.userOrders = action.payload;
        },
        [customerOrders.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Order by ID
        [orderbyId.pending]: (state) => {
            state.loading = true;
        },
        [orderbyId.fulfilled]: (state, action) => {
            state.loading = false;
            state.orderbyId = action.payload;
        },
        [orderbyId.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default OrderSlice.reducer