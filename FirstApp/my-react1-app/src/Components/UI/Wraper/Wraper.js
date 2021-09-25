import React from 'react'
import styles from "./Wraper.module.css"

const Wraper = (props) => {
    let classes = `${styles.wraper} ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Wraper
