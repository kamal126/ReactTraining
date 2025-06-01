
import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSilce'

const store = configureStore({
    reducer : {
        auth : authSlice
        // add more slices here for posts
    }
});

export default store;