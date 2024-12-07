/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data.js";

/**
 * useTodo
 */
export const useTodo = () => {
  /* todolist */
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  /* todo採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  /* actions */
  /**
   * Todo新規登録処理
   * @param {*} title
   * @param {*} content
   */
  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...todoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];
      // todolistを更新
      setTodoList(newTodo);
      // 採番IDを更新
      setUniqueId(nextUniqueId);
    },
    [todoList, uniqueId]
  );

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string }targetTitle
   */
  const deleteTodo = useCallback(
    (targetId, targetTitle) => {
      if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
        // 削除するid以外のtodoリストを再編集
        // filterを用いた方法
        const newTodoList = todoList.filter((todo) => todo.id !== targetId);

        // 削除するTodoの配列番号を取り出してspliceで削除する方法もある
        // const newTodoList = [...todoList];
        // const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
        // newTodoList.splice(deleteIndex, 1);

        // todoを削除したtodo listで更新
        setTodoList(newTodoList);
      }
    },
    [todoList]
  );

  /**
   * Todo編集更新処理
   * @param {*} targetId
   * @param {*} title
   * @param {*} content
   */
  const updateTodo = useCallback(
    (id, title, content) => {
      const updatedTodoList = todoList.map((todo) => {
        if (id === todo.id) {
          return {
            id: todo.id,
            title: title,
            content: content,
          };
        }
        return todo;
      });
      // todolistを更新
      setTodoList(updatedTodoList);
    },
    [todoList]
  );

  return {
    todoList,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
