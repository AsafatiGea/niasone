"use client";

import styles from "./destinations.module.css";

export default function Destinations() {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <h1>Explore Nias Island</h1>
        <p>Tempat tujuan wisata terbaik di Pulau Nias</p>
      </header>

      {/* SECTION 1 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌊 Spot Surfing Terbaik Dunia</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/pantai-sorake.jpg" alt="Pantai Sorake" />
            <div className={styles.cardContent}>
              <h3>Pantai Sorake</h3>
              <p>Ombak kelas dunia, surga bagi peselancar internasional.</p>
            </div>
          </div>

          <div className={styles.card}>
            <img src="/pantai-tureloto.webp" alt="Pantai Tureloto" />
            <div className={styles.cardContent}>
              <h3>Pantai Tureloto</h3>
              <p>Ombak stabil dan suasana lebih tenang untuk bersantai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🏝️ Destinasi Lainnya</h2>

        <div className={styles.grid}>
          <div className={styles.cardSmall}>
            <h3>Pulau Asu</h3>
            <p>Pulau kecil dengan pasir putih & air laut jernih.</p>
          </div>

          <div className={styles.cardSmall}>
            <h3>Air Terjun Kholong</h3>
            <p>Air terjun tersembunyi di tengah hutan tropis.</p>
          </div>

          <div className={styles.cardSmall}>
            <h3>Teluk Dalam</h3>
            <p>Kota bersejarah dengan budaya lokal yang kuat.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2026 Discover Nias Island</p>
      </footer>
    </div>
  );
}
