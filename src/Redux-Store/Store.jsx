import { configureStore } from '@reduxjs/toolkit'
import AppSlice from './AppSlice'
import AuthSlice from './AuthSlice'

export default configureStore({
  reducer: {
    appState: AppSlice,
    Auth: AuthSlice,
  }
})