/**
 * TodoContext
 * @package contexts
 */
import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

/**
 * TodoContext
 */
const TodoContext = createContext();

/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider = ({ children }) => {
  const { todoList, addTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
export const useTodoContext = () => {
  return useContext(TodoContext);
};