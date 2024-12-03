import { useTodo } from "../../../hooks/useTodo";
import { CommonButton } from "../../atoms/CommonButton";
import { InputForm } from "../../atoms/InputForm";
import { TextAreaForm } from "../../atoms/TextAreaForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";

export const TodoCreateTemplate = () => {
  const [{ addInputValue }, { onChangeAddInputValue, handleAddTodo }] =
    useTodo();

  return (
    <BaseLayout title="Create Todo">
      <section className={styles.common}>
        <InputForm
          inputValue={addInputValue}
          placeholder={"New Title"}
          handleChangeValue={onChangeAddInputValue}
          handleKeyDown={handleAddTodo}
        />
      </section>
      <section className={styles.common}>
        <TextAreaForm
          value={addInputValue}
          placeholder={"Content"}
          onChange={onChangeAddInputValue}
        />
      </section>
      <section className={styles.common}>
        <CommonButton type="submit" label="Add Todo" onClick={handleAddTodo} />
      </section>
    </BaseLayout>
  );
};
