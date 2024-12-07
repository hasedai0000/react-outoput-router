/**
 * CommonButton
 *
 * @package components
 */
import styles from "./style.module.css";

/**
 * CommonButton
 * @param type
 * @param label
 * @param onClick
 * @returns
 */
export const CommonButton = ({ type, label, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};
