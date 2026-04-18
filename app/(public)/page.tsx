import styles from "./public.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YA'AHOWU 👋</h1>

      <p className={styles.subtitle}>
        Welcome to NiasOne - Explore Nias Island
      </p>

      <div className={styles.actions}>
        <Link href="/destinations">
          <button className={styles.button}>Explore Now</button>
        </Link>
        <Link href="/culture"></Link>

        <Link href="/login">
          <button className={styles.secondaryButton}>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
