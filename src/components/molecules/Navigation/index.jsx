import { NAVIGATION_LIST } from "../../../constants/navigations";
import { NavigationLink } from "../../atoms/NavigationLink";
import styles from "./styles.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink title="Top" linkPath={NAVIGATION_LIST.TOP} />
        <NavigationLink title="Create" linkPath={NAVIGATION_LIST.CREATE} />
      </ul>
    </nav>
  );
};
