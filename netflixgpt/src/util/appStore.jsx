import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moivesReducer from "./moiveslice"
const appstore = configureStore(
    {
        reducer:{
            user:userReducer,
            moives:moivesReducer,
        },
    }
)
export default appstore;