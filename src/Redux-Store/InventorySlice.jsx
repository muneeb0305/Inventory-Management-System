import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Store from './Store';
import axios from 'axios';

//get all Items
export const showItems = createAsyncThunk(
    "showItems",
    async (args, { rejectWithValue }) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get("http://localhost:8080/inventory/viewitems", config)
            .then(response => {
                return response.data
            })
            .catch(error => {
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);
//get item by id
export const showItemsByID = createAsyncThunk(
    "showItemsByID",
    async (id, { rejectWithValue }) => {
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
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);
//Add Item
export const addItem = createAsyncThunk(
    "addItem",
    async (data, { rejectWithValue }) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.put(`http://localhost:8080/inventory/add`, data, config)
            .then(response => {
                return response
            })
            .catch(error => {
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);
//Update Item
export const updateItem = createAsyncThunk(
    "updateItem",
    async (data, { rejectWithValue }) => {
        const token = Store.getState().Auth.token;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.post(`http://localhost:8080/inventory/update/${data[0]}`, data[1], config)
            .then(response => {
                return response
            })
            .catch(error => {
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);
//Delete Item
export const deleteItem = createAsyncThunk(
    "deleteItem",
    async (id, { rejectWithValue }) => {
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
                const err = error.response.data
                return rejectWithValue(err)
            });
    }
);

export const InventorySlice = createSlice({

    name: 'InventoryDetails',
    initialState: {
        items: [],
        itemByID: [],
        loading: false,
        error: null,
    },
    extraReducers: {

        //Show Items
        [showItems.pending]: (state) => {
            state.loading = true;
        },
        [showItems.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [showItems.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Show Item By ID
        [showItemsByID.pending]: (state) => {
            state.loading = true;
        },
        [showItemsByID.fulfilled]: (state, action) => {
            state.loading = false;
            state.itemByID = action.payload;
        },
        [showItemsByID.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Add Item
        [addItem.pending]: (state) => {
            state.loading = true;
        },
        [addItem.fulfilled]: (state) => {
            state.loading = false;
        },
        [addItem.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Update Item
        [updateItem.pending]: (state) => {
            state.loading = true;
        },
        [updateItem.fulfilled]: (state) => {
            state.loading = false;
        },
        [updateItem.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //Delete Item
        [deleteItem.pending]: (state) => {
            state.loading = true;
        },
        [deleteItem.fulfilled]: (state) => {
            state.loading = false;
        },
        [deleteItem.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default InventorySlice.reducer