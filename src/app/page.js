import styles from "./page.module.css";
import Header from "../components/header"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
