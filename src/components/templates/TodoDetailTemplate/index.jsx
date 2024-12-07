import { useParams } from "react-router-dom";
import { useTodoContext } from "../../../contexts/TodoContext";
import { InputForm } from "../../atoms/InputForm";
import { TextAreaForm } from "../../atoms/TextAreaForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";

export const TodoDetailTemplate = () => {
  const { todoList } = useTodoContext();
  const { id } = useParams();
  const todo = todoList.find((todo) => String(todo.id) === id);

  return (
    <BaseLayout title="Create Todo">
      <div className={styles.area}>
        <InputForm disabled inputValue={todo.title} />
      </div>
      <div className={styles.area}>
        <TextAreaForm disabled inputValue={todo.content} />
      </div>
    </BaseLayout>
  );
};
