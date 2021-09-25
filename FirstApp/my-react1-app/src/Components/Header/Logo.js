import React from 'react'
import styles from "./Logo.module.css"
import imgLogo from "./mainLogo.png"

const Logo = (props) => {

    return (
        <div className={styles.logo}>            
            <img src={imgLogo}/>
            <h1>SDT 2021</h1>
        </div>
    )
}

export default Logo
