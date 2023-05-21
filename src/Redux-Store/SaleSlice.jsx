import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Store from './Store';
import axios from 'axios';

//Sale Card
export const saleCard = createAsyncThunk(
    "saleCard",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);
//Sale Table
export const cityOrders = createAsyncThunk(
    "cityOrders",
    async (args, { rejectWithValue }) => {
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
                return rejectWithValue(err)
            });
    }
);

export const SaleSlice = createSlice({
    name: 'saleDetails',
    initialState: {
        orders: [],
        saleCard:[],
        loading: false,
        error: null,
    },
    extraReducers: {
        //Sale Card
        [saleCard.pending]: (state) => {
            state.loading = true;
        },
        [saleCard.fulfilled]: (state, action) => {
            state.loading = false;
            state.saleCard = action.payload;
        },
        [saleCard.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //City Orders
        [cityOrders.pending]: (state) => {
            state.loading = true;
        },
        [cityOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        },
        [cityOrders.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default SaleSlice.reducer