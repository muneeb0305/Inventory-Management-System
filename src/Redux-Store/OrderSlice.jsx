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


export const OrderSlice = createSlice({
    name: 'orderDetails',
    initialState: {
        orders: [],
        adminCard:[],
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
    }
})

export default OrderSlice.reducer