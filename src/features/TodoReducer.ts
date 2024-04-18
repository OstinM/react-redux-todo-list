import { TodoType } from "../types/TodoType";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TodoType[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;