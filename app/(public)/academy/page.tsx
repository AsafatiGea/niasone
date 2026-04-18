"use client";

import { useState } from "react";
import styles from "./academy.module.css";

const lessons = {
  nias: [
    { word: "Ya'ahowu", meaning: "Halo / Salam" },
    { word: "Ba dödö", meaning: "Terima kasih" },
    { word: "Faoma", meaning: "Makan" },
  ],
  indonesia: [
    { word: "Halo", meaning: "Sapaan umum" },
    { word: "Terima kasih", meaning: "Ucapan syukur" },
    { word: "Makan", meaning: "Aktivitas makan" },
  ],
  inggris: [
    { word: "Hello", meaning: "Greeting" },
    { word: "Thank you", meaning: "Expression of gratitude" },
    { word: "Eat", meaning: "To consume food" },
  ],
  mandarin: [
    { word: "你好 (Nǐ hǎo)", meaning: "Halo" },
    { word: "谢谢 (Xièxiè)", meaning: "Terima kasih" },
    { word: "吃 (Chī)", meaning: "Makan" },
  ],
};

export default function Academy() {
  const [active, setActive] = useState("nias");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌏 NiasOne Academy</h1>
      <p className={styles.subtitle}>Belajar bahasa dari lokal hingga global</p>

      {/* TAB BUTTON */}
      <div className={styles.tabs}>
        <button onClick={() => setActive("nias")}>Nias</button>
        <button onClick={() => setActive("indonesia")}>Indonesia</button>
        <button onClick={() => setActive("inggris")}>English</button>
        <button onClick={() => setActive("mandarin")}>Mandarin</button>
      </div>

      {/* CONTENT */}
      <div className={styles.card}>
        {lessons[active].map((item, index) => (
          <div key={index} className={styles.item}>
            <h3>{item.word}</h3>
            <p>{item.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
