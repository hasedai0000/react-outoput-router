/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";

/**
 * useTodoCreateTemplate
 * @param addTodo
 * @returns {[{inputTitle, inputContent}, {handleChangeTitle: ((function(*): void)|*), handleChangeContent: ((function(*): void)|*), handleCreateTodo: ((function(*): void)|*)}]}
 */
export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();
  /** Todoのタイトル */
  const [inputTitle, setInputTitle] = useState("");
  /** Todoの内容 */
  const [inputContent, setInputContent] = useState("");

  /**
   * タイトル更新処理
   * @type {function(*): void}
   */
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  /**
   * 内容更新処理
   * @type {function(*): void}
   */
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  /**
   * 新規Todo登録処理
   * @type {function(*): void}
   */
  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  const state = {
    inputTitle,
    inputContent,
  };

  const actions = {
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };

  return [state, actions];
};
