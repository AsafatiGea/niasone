import Link from "next/link";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>NiasOne</h1>

        <Link href="/auth/login" className={styles.link}>
          Login
        </Link>

        <Link href="/auth/register" className={styles.link}>
          Register
        </Link>
      </div>
    </div>
  );
}
