import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch/todos", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.")
    return await res.json();
})

const initialvalue = {
    todos: [],
    onError: false,
    onSuccess: false,
    loading: false
}



const slice = createSlice({
    name: "todos",
    initialState: initialvalue,
    reducers: {
        deleteTodos: (state, { payload }) => {
            state.todos = state.todos.filter(item => item.id !== payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            console.log("calling", state)
            state = {
                todos: [],
                onError: false,
                onSuccess: false,
                loading: true
            }
        }).addCase(fetchData.fulfilled, (state, { payload }) => {
            console.log("onFulfilled", { state, payload })
           return  state = {
                todos: payload,
                onError: false,
                onSuccess: true,
                loading: false
            }
        }).addCase(fetchData.rejected, (state, { payload }) => {
            console.log("onRejected", state, payload)
           return state = {
                todos: [],
                onError: true,
                onSuccess: false,
                loading: false
            }
        })

    }
})


export const { deleteTodos } = slice.actions;
export default slice.reducer;