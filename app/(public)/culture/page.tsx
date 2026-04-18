import styles from "./culture.module.css";

export default function Culture() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>7 Budaya Unik Pulau Nias</h1>
        <p>Warisan tradisi yang masih dijaga hingga sekarang</p>
      </header>

      {/* ITEM 1 */}
      <section className={styles.card}>
        <h2>1. Lompat Batu (Fahombo)</h2>

        <div className={styles.content}>
          <img src="/img/lompat-batu.jpg" alt="Lompat Batu" />

          <div>
            <p>
              Tradisi ikonik Nias yang melambangkan keberanian dan kedewasaan.
            </p>

            <div className={styles.info}>
              <p>📍 Nias Selatan</p>
              <p>🏷️ Tradisi</p>
              <p>🎯 Simbol keberanian</p>
            </div>

            <a
              href="https://jawapos.com/travelling/2509180015/fahombo-nias"
              target="_blank"
            >
              🔎 Baca selengkapnya
            </a>
          </div>
        </div>
      </section>

      {/* ITEM 2 */}
      <section className={styles.card}>
        <h2>2. Rumah Adat Nias</h2>

        <div className={styles.content}>
          <img src="/img/ruma nias.jpeg" alt="Rumah Nias" />

          <div>
            <p>Rumah adat tahan gempa tanpa paku.</p>

            <div className={styles.info}>
              <p>📍 Pulau Nias</p>
              <p>🏷️ Arsitektur</p>
              <p>🏠 Omo Hada</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITEM 3 */}
      <section className={styles.card}>
        <h2>3. Tari Perang Nias</h2>

        <div className={styles.content}>
          <img src="/img/tarian-perang-suku-nias.webp" />

          <div>
            <p>Tarian yang menggambarkan keberanian prajurit.</p>

            <div className={styles.info}>
              <p>📍 Nias</p>
              <p>🏷️ Seni Tari</p>
              <p>🎭 Properti tombak</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITEM 4 */}
      <section className={styles.card}>
        <h2>4. Tradisi Owasa</h2>

        <div className={styles.content}>
          <img src="/img/owasa.jpg" />

          <div>
            <p>Pesta adat besar simbol status sosial.</p>

            <div className={styles.info}>
              <p>📍 Nias</p>
              <p>🏷️ Tradisi</p>
              <p>🎯 Kehormatan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITEM 5 */}
      <section className={styles.card}>
        <h2>5. Pernikahan Adat</h2>

        <div className={styles.content}>
          <img src="/img/pernikahan nias.jpg" />

          <div>
            <p>Sistem patrilineal dan tradisi mahar.</p>

            <div className={styles.info}>
              <p>📍 Nias</p>
              <p>🏷️ Sosial</p>
              <p>💰 Mahar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITEM 6 */}
      <section className={styles.card}>
        <h2>6. Seni Ukiran</h2>

        <div className={styles.content}>
          <img src="/img/ukiran nias.jpg" />

          <div>
            <p>Ukiran khas penuh makna simbolis.</p>

            <div className={styles.info}>
              <p>📍 Nias</p>
              <p>🏷️ Seni</p>
              <p>🪵 Kayu</p>
            </div>
          </div>
        </div>
      </section>

      {/* ITEM 7 */}
      <section className={styles.card}>
        <h2>7. Kehidupan Pesisir</h2>

        <div className={styles.content}>
          <img src="/img/pesisir nias.jpg" />

          <div>
            <p>Hidup bergantung pada laut.</p>

            <div className={styles.info}>
              <p>📍 Pesisir Nias</p>
              <p>🏷️ Gaya Hidup</p>
              <p>🎣 Nelayan</p>
            </div>
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
