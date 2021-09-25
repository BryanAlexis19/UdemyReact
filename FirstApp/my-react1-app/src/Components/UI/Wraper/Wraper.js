import React from 'react'
import "./Wraper.css"

const Wraper = (props) => {
    const classes = `wraper + ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Wraper
