/**
 * InputForm
 *
 * @package components
 */
import styles from "./style.module.css";

/**
 * InputForm
 * @param {*} props
 * @returns
 */
export const InputForm = ({
  disabled = false,
  inputValue,
  placeholder,
  handleChangeValue,
}) => {
  return (
    <input
      disabled={disabled}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
    />
  );
};
