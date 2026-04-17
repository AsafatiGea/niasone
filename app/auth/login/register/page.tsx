"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Email dan password wajib diisi");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          phone: phone,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Berhasil daftar!");
      router.push("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.brand}>NiasOne</div>

      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Mulai perjalanan digitalmu di NiasOne</p>

        <input
          className={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Nama"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className={styles.button} onClick={handleRegister}>
          Daftar
        </button>

        <p className={styles.footer}>
          Sudah punya akun?{" "}
          <span className={styles.link} onClick={() => router.push("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
