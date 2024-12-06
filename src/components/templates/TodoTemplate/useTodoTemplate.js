/**
 * useTodoTemplate
 *
 * @package hooks
 */
import { useCallback, useMemo, useState } from "react";

/**
 * useTodoTemplate
 * @param todoList
 * @returns {[{searchKeyword: string, showTodoList: *},{handleChangeSearchKeyword: (function(*): void)}]}
 */
export const useTodoTemplate = ({ todoList }) => {
  /* 検索ワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    const regexp = new RegExp("^" + searchKeyword, "i");
    return todoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [todoList, searchKeyword]);

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  const state = {
    searchKeyword,
    showTodoList,
  };

  const actions = {
    handleChangeSearchKeyword,
  };

  return [state, actions];
};
