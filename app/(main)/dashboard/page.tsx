import styles from "./dashboard.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>YA'AHOWU 👋</h1>

        <p className={styles.subtitle}>
          Welcome to <span>NiasOne</span> - Explore Nias Island
        </p>

        <div className={styles.actions}>
          <Link href="/destinations">
            <button className={styles.button}>Explore Now</button>
          </Link>

          <Link href="/login">
            <button className={styles.secondaryButton}>Get Started</button>
          </Link>
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className={styles.section}>
        <h2>Selamat Datang di Pulau Nias</h2>

        <div className={styles.cultureContent}>
          <img src="/img/Pantai-Sorake.jpg" alt="Nias Island" />

          <div>
            <p className={styles.desc}>
              Pulau Nias merupakan salah satu destinasi wisata terbaik di
              Indonesia. Terkenal dengan ombak kelas dunia, budaya unik, dan
              keindahan alam yang masih alami.
            </p>

            <Link href="/destinations">
              <button className={styles.button}>Explore Destinations</button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className={styles.section}>
        <h2>Mengapa Harus Mengunjungi Nias?</h2>
        <p>Ada banyak hal menarik yang bisa kamu temukan:</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🌊 Selancar Kelas Dunia</h3>
            <p>Pantai Sorake punya ombak terbaik di dunia.</p>
          </div>

          <div className={styles.card}>
            <h3>🎭 Budaya Unik</h3>
            <p>Lompat batu & rumah adat khas Nias.</p>
          </div>

          <div className={styles.card}>
            <h3>🌴 Alam Indah</h3>
            <p>Pantai alami & pemandangan menakjubkan.</p>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className={styles.section}>
        <h2>Upcoming Events</h2>
        <ul className={styles.events}>
          <li>Festival Lompat Batu – Juni 2026</li>
          <li>Surfing Competition Sorake – Agustus 2026</li>
        </ul>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className={styles.footer}>
        <p>© 2026 NiasOne - Explore Nias Island</p>
      </footer>
    </main>
  );
}
