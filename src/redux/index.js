import { configureStore } from '@reduxjs/toolkit'
import auth from './Auth'

export const store = configureStore({
  reducer: { auth },
})

export default store