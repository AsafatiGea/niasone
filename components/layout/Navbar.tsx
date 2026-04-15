"use client";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Left */}
      <div className={styles.left}>
        <h2 className={styles.logo}>Nias Island</h2>
        <span className={styles.location}>📍 HUB</span>
      </div>

      {/* Center */}
      <div className={styles.center}>
        <input type="text" placeholder="Cari" className={styles.search} />
      </div>

      {/* Right */}
      <div className={styles.right}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Destinations</a>
        <a href="#">Culture</a>
        <a href="#">Gallery</a>
        <a href="#">Government</a>
        <span className={styles.user}>👤</span>
      </div>
    </nav>
  );
}
