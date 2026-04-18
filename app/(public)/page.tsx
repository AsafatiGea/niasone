import styles from "./public.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>YA'AHOWU 👋</h1>
        <p className={styles.subtitle}>
          Welcome to NiasOne - Explore Nias Island
        </p>

        <div className={styles.actions}>
          <Link href="/login">
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
