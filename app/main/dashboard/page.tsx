"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";
import Navbar from "@/components/layout/Navbar";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/auth/login");
      } else {
        setUser(data.user);
      }

      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.header}>Home</h1>

        {user && (
          <div className={styles.card}>
            <p className={styles.item}>
              <span className={styles.label}>Email:</span>{" "}
              <span className={styles.value}>{user.email}</span>
            </p>

            <p className={styles.item}>
              <span className={styles.label}>Nama:</span>{" "}
              <span className={styles.value}>
                {user.user_metadata?.display_name}
              </span>
            </p>

            <p className={styles.item}>
              <span className={styles.label}>Phone:</span>{" "}
              <span className={styles.value}>{user.user_metadata?.phone}</span>
            </p>

            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
       <Chatbot />
    </>
  );
}
