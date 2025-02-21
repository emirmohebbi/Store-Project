import { MoonLoader } from "react-spinners";
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <MoonLoader
        color="#fe5d42"
        // cssOverride={{}}
        loading
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loader;
