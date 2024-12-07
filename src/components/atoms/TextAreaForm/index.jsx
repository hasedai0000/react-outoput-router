/**
 * TextAreaForm
 * @package components
 */
import styles from "./styles.module.css";

/**
 * TextAreaForm
 * @param disabled
 * @param value
 * @param placeholder
 * @param onChange
 * @returns {JSX.Element}
 */
export const TextAreaForm = ({
  disabled = false,
  inputValue,
  placeholder,
  handleChangeValue,
}) => {
  return (
    <textarea
      disabled={disabled}
      className={styles.text}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChangeValue}
    />
  );
};
