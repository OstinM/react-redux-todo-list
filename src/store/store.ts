import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
