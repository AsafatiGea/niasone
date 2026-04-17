import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.authLinks}>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
      </div>
      <div className={styles.hero}>
        <h1 className={styles.title}>YA'AHOWU</h1>
        <p className={styles.subtitle}>
          Discover the beauty, culture, and unique traditions of Nias Island
        </p>

        <div className={styles.actions}>
          <Link href="/main/destinations" className={styles.primaryBtn}>
            Explore Destinations
          </Link>

          <Link href="/main/culture" className={styles.secondaryBtn}>
            Explore Culture
          </Link>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Why Visit Nias?</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🌊 World-Class Surfing</h3>
            <p>Experience the legendary waves of Sorake Beach.</p>
          </div>

          <div className={styles.card}>
            <h3>🎭 Unique Culture</h3>
            <p>Discover stone jumping and traditional houses.</p>
          </div>

          <div className={styles.card}>
            <h3>🌴 Natural Beauty</h3>
            <p>Enjoy untouched beaches and stunning landscapes.</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p>© 2026 NiasOne — Explore Nias Island</p>
      </div>
    </div>
  );
}
