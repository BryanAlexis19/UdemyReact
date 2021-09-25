import React from "react";
import styles from "./Header.module.css";
import Logo from "./Logo";
import UserSection from "./UserSection"
const Header = (props) => {
  return <div className={styles.header}>
    <Logo></Logo>
    <UserSection></UserSection>
  </div>;
};

export default Header;
