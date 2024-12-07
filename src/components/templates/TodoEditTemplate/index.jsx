import { useParams } from "react-router-dom";
import { useTodoContext } from "../../../contexts/TodoContext";
import { InputForm } from "../../atoms/InputForm";
import { TextAreaForm } from "../../atoms/TextAreaForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";
import { useTodoEditTemplate } from "./useTodoEditTemplate";
import { CommonButton } from "../../atoms/CommonButton";

export const TodoEditTemplate = () => {
  const { todoList, updateTodo } = useTodoContext();
  const { id } = useParams();
  const todo = todoList.find((todo) => String(todo.id) === id);

  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ updateTodo, todo });

  return (
    <BaseLayout title="Edit Todo">
      <form className={styles.container} onSubmit={handleUpdateTodo}>
        <div className={styles.area}>
          <InputForm
            inputValue={inputTitle}
            placeholder={"Edit Title"}
            handleChangeValue={handleChangeTitle}
          />
        </div>
        <div className={styles.area}>
          <TextAreaForm
            inputValue={inputContent}
            placeholder={"Edit Content"}
            handleChangeValue={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" label="Update Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
