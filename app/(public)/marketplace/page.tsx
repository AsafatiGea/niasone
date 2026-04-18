"use client";

import styles from "./marketplace.module.css";

export default function Marketplace() {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <h1>Marketplace Nias</h1>
        <p>Jual produk khas Pulau Nias</p>
      </header>

      {/* CONTENT */}
      <section className={styles.section}>
        <div className={styles.container}>
          <a href="/academy" className={styles.backBtn}>
            ← Kembali
          </a>

          <div className={styles.card}>
            <h2>🛍️ Jual Produk</h2>

            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Produk berhasil ditambahkan!");
              }}
            >
              <label>Nama Produk</label>
              <input
                type="text"
                placeholder="Contoh: Baju Adat Nias"
                className={styles.input}
              />

              <label>Harga</label>
              <input
                type="number"
                placeholder="Contoh: 250000"
                className={styles.input}
              />

              <label>Deskripsi</label>
              <textarea
                placeholder="Jelaskan produk Anda..."
                className={styles.input}
              ></textarea>

              <label>Upload Gambar</label>
              <input type="file" className={styles.input} />

              <button type="submit" className={styles.button}>
                Jual Produk
              </button>
            </form>
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
