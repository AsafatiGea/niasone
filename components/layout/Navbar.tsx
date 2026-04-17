"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/culture">Culture</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/government">Government</Link>
        {session ? (
          <button onClick={handleLogout} className={styles.logout}>
            <LogOut size={20} /> Logout
          </button>
        ) : (
          <Link href="/auth/login" className={styles.user}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
