import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/userSlice'
import logger from 'redux-logger'

export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})