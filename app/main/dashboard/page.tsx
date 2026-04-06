"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/auth/login");
      } else {
        setUser(data.user);
      }
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Dashboard</h1>

      {user ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
