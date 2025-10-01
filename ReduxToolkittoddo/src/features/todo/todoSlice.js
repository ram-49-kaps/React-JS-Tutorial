import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [{id: 1, text: "Hello world"}]
}

export  const todoslice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo : (state, action) => {
            const todo = {
                id:nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id 
            !== action.payload)
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id? 
            {...todo, text: action.payload} : todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoslice.actions;

export default todoslice.reducer;