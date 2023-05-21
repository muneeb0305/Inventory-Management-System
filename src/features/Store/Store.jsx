import { configureStore } from '@reduxjs/toolkit'
import AppReducer from '../App/AppSlice'
import AuthReducer from '../Auth/AuthSlice'
import OrderReducer from '../Orders/OrderSlice'
import SaleReducer from '../Sale/SaleSlice'
import UserSlice from '../Users/UserSlice'
// import InventoryReducer from '../Inventory/InventorySlice'

export default configureStore({
  reducer: {
    appState: AppReducer,
    Auth: AuthReducer,
    orders: OrderReducer,
    sale: SaleReducer,
    user: UserSlice,
    // inventory: InventoryReducer,
  }
})