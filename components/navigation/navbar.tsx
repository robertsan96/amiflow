import styles from "./navbar.module.css";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#" className={styles.logoContainer}>
          <Image src={"/logo.svg"} width={25} height={25} alt="Logo" />
          <p>amiflow</p>
        </a>

        <ul className={styles.navMenu}>
          <li>
            <a href="#">Connections</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
