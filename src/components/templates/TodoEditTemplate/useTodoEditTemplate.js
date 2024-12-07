/**
 * useTodoEditTemplate
 *
 * @package hooks
 */
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";

/**
 * useTodoEditTemplate
 * @param {updateTodo: function, todo: object}
 * @returns {[{inputTitle: string, inputContent: string}, {handleChangeTitle: (function(*): void), handleChangeContent: (function(*): void), handleUpdateTodo: (function(*): void)}]}
 */
export const useTodoEditTemplate = ({ updateTodo, todo }) => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState(todo.title);
  const [inputContent, setInputContent] = useState(todo.content);

  const handleChangeTitle = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  const handleChangeContent = useCallback((e) => {
    setInputContent(e.target.value);
  }, []);

  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo?.id, updateTodo, inputTitle, inputContent]
  );

  const state = {
    inputTitle,
    inputContent,
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [state, actions];
};
