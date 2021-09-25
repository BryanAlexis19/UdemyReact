import React from 'react'
import styles from "./UserSection.module.css"
import userImg from "./user2.png"

const UserSection = () => {
    return (
        <div className={styles.user}>
            <h4>Bienvenido! Usuario1</h4>
            <img src={userImg} alt="UserImage"/>            
        </div>
    )
}

export default UserSection
