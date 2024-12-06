import styles from "./page.module.css"
import Header from "../components/header"
import Intro from "../components/intro"
import Teacher from "../components/teacher"
import Writer from "../components/writer"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header/>
        <Intro/>
        <Teacher/>
        <Writer/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
