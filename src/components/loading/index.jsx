import styles from "./index.module.css";

export function Loading() {
  return (
    <div className={styles.loader_container }>
      <div className={styles.loader}></div>
      <p className={styles.loading}>Loading ...</p>
    </div>
  );
}