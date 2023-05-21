import { configureStore } from '@reduxjs/toolkit'
import AppReducer from './AppSlice'
import AuthReducer from './AuthSlice'
import OrderReducer from './OrderSlice'
import SaleReducer from './SaleSlice'
// import InventoryReducer from './InventorySlice'

export default configureStore({
  reducer: {
    appState: AppReducer,
    Auth: AuthReducer,
    orders: OrderReducer,
    sale: SaleReducer,
    // inventory: InventoryReducer
  }
})