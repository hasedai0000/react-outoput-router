import { useTodoContext } from "../../../contexts/TodoContext";
import { CommonButton } from "../../atoms/CommonButton";
import { InputForm } from "../../atoms/InputForm";
import { TextAreaForm } from "../../atoms/TextAreaForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";
import { useTodoCreateTemplate } from "./useTodoCreateTemplate";

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();

  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title="Create Todo">
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            inputValue={inputTitle}
            placeholder={"New Title"}
            handleChangeValue={handleChangeTitle}
          />
        </div>
        <div className={styles.area}>
          <TextAreaForm
            value={inputContent}
            placeholder={"Content"}
            handleChangeValue={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" label="Add Todo" />
        </div>
      </form>
    </BaseLayout>
  );
};
