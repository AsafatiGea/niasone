"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.replace("/auth/login");
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <span className={styles.logo}>Nias Island</span>
        </div>

        <ul className={styles.navMenu}>
          <li>Home</li>
          <li>About</li>
          <li>Destinations</li>
          <li>Culture</li>
          <li>Gallery</li>

          <li
            onClick={async () => {
              await supabase.auth.signOut();
              router.replace("/auth/login");
            }}
          >
            Logout
          </li>
        </ul>
      </nav>

      {/* HEADER */}
      <header className={styles.header}>
        <h1>YA'AHOWU</h1>
        <p>Selamat datang {user.user_metadata?.display_name}</p>
      </header>

      {/* HERO */}
      <section className={styles.section}>
        <h2>Selamat Datang di Pulau Nias</h2>

        <div className={styles.cultureContent}>
          <img src="/nias.jpg" alt="nias" />

          <div>
            <p>
              Pulau Nias merupakan salah satu destinasi wisata terbaik di
              Indonesia.
            </p>

            <button className={styles.button}>Explore Destinations</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.section}>
        <h2>Mengapa Harus Mengunjungi Nias?</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>🌊 Surfing</h3>
            <p>Ombak kelas dunia</p>
          </div>

          <div className={styles.card}>
            <h3>🎭 Budaya</h3>
            <p>Lompat batu</p>
          </div>

          <div className={styles.card}>
            <h3>🌴 Alam</h3>
            <p>Pantai indah</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2026 NiasOne</p>
      </footer>
    </>
  );
}
