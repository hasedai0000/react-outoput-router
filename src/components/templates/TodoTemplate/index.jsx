/**
 * TodoTemplate
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm";
import { TodoList } from "../../organisms/TodoLlist";
import styles from "./styles.module.css";
import { BaseLayout } from "../../organisms/BaseLayout/index.jsx";
import { useTodoContext } from "../../../contexts/TodoContext.jsx";
import { useTodoTemplate } from "./useTodoTemplate.js";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { todoList, deleteTodo } = useTodoContext();

  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ todoList });

  return (
    <BaseLayout title="Todo List">
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm
            inputValue={searchKeyword}
            placeholder={"Search Keyword"}
            handleChangeValue={handleChangeSearchKeyword}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
