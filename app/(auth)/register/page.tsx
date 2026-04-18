"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "../auth.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password) {
      alert("Isi semua field");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          phone,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Berhasil daftar!");
      router.replace("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Register</h1>

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

        <button
          className={styles.button}
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Loading..." : "Daftar"}
        </button>
      </div>
    </div>
  );
}
