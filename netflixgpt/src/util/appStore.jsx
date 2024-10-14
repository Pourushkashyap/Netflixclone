import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moivesReducer from "./moiveslice"
import gptReducer from './gptSlice'
const appstore = configureStore(
    {
        reducer:{
            user:userReducer,
            moives:moivesReducer,
            gpt:gptReducer,
        },
    }
)
export default appstore;