import { createSlice } from "@reduxjs/toolkit";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const todoListSlice = createSlice({
  name: "todo",
  initialState: {
    todos: INIT_TODO_LIST,
    uniqueId: INIT_UNIQUE_ID,
  },
  reducers: {
    addTodo: (state, action) => {
      const nextUniqueId = state.uniqueId + 1;
      state.todos = [
        ...state.todos,
        {
          id: nextUniqueId,
          title: action.payload,
        },
      ];
      state.uniqueId = nextUniqueId;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
