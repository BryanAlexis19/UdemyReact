import React from "react";
import styles from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={`${styles["section-wraper"]}`}>
        <div className={`${styles["footer-section"]}`}>
          <ul>
            <li>Descarga la aplicación</li>
            <li>Nosotros</li>
            <li>Contáctanos</li>
            <li>Nuestras sedes</li>
          </ul>
        </div>
        <div className={`${styles["footer-section"]}`}>
          <ul>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Afiliate</li>
          </ul>
        </div>
        <div className={`${styles["footer-section"]}`}>
          <ul>
            <li>Términos</li>
            <li>Política de Privacidad</li>
            <li>Mapa del Sitio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
