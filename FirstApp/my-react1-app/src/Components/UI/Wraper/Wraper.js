import React from 'react'
import "./Wraper.css"

const Wraper = (props) => {
    const classes = `wraper + ${props.className}`
    console.log(classes);
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Wraper
