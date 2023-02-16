import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoContainer}>
          <Image src={"/logo.svg"} width={25} height={25} alt="Logo" />
          <p>amiflow</p>
        </Link>

        <ul className={styles.navMenu}>
          <li>
            <Link href="#">Connections</Link>
          </li>
          <li>
            <Link href="#">Settings</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
