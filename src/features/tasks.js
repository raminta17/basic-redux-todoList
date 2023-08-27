import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
},
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task,index) => index !== action.payload)
        }
    }
})

export const {addTask, removeTask} = userSlice.actions;

export default userSlice.reducer;