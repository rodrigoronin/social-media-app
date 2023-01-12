import styles from "./Header.module.css";

import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo da aplicação" />
      <h1>Social Feed</h1>
    </header>
  );
}
