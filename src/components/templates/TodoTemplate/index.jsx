/**
 * TodoTemplate
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import { TodoList } from "../../organisms/TodoLlist";
import { useTodo } from "../../../hooks/useTodo.js";
import styles from "./styles.module.css";
import { BaseLayout } from "../../organisms/BaseLayout/index.jsx";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const [
    { addInputValue, searchKeyword, showTodoList },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
      handleChangeSearchKeyword,
    },
  ] = useTodo();

  return (
    <BaseLayout title="Todo List">
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </BaseLayout>
  );
};
