import { configureStore } from "@reduxjs/toolkit";
import slice from "./features/CounterSlice";
import data from "./features/API"
import { fetchData } from "./features/API";



const store = configureStore({
    reducer: {
        count: slice.reducer,
        getTodos: data
    }
})
store.dispatch(fetchData());
export default store;