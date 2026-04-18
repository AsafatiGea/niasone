import Link from "next/link";
import styles from "./public.module.css";

export default function PublicLayout({ children }) {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          NiasOne
        </Link>

        <div className={styles.navlinks}>
          <Link href="/destinations">Destinations</Link>
          <Link href="/culture">Culture</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/academy">Academy</Link>
        </div>

        <div className={styles.auth}>
          <Link href="/login">Login</Link>
          <Link href="/register" className={styles.registerBtn}>
            Register
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
