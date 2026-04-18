"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "../auth.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email dan password wajib diisi");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else if (data.session) {
      router.replace("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

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

        <button
          className={styles.button}
          style={{ position: "relative", zIndex: 10 }}
          onClick={(e) => {
            e.preventDefault(); // 🔥 cegah gangguan dari element lain
            console.log("CLICKED");
            handleLogin();
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className={styles.footer}>
          Belum punya akun?{" "}
          <span
            className={styles.link}
            onClick={() => router.push("/register")}
          >
            Daftar
          </span>
        </p>
      </div>
    </div>
  );
}
