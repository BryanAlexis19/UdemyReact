import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
const Header = (props) => {
  return <div className={styles.header}>
    <Logo></Logo>
  </div>;
};

export default Header;
