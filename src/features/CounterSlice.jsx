import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const fetchdata = createAsyncThunk("fetch/todos", async () => {
    const res = await fetch("")
    return await res.json;
})
const slice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increament: (state, actions) => {
            console.log({ state, actions })
            return state + 1;
        },
        decreament: (state) => {
            return state - 1;
        },
        setValue: (state, { payload }) => {
            return state + payload;
        }
    }
})

console.log({ slice })

export const { increament, decreament, setValue } = slice.actions;
export default slice;