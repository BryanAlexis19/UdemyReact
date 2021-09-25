import React from 'react'
import Wraper from '../UI/Wraper/Wraper'
import FormTramite from './FormTramite'

const AgregarTramite = (props) => {

    return (
        <Wraper className={props.className}>
            <FormTramite></FormTramite>
        </Wraper>
    )
}

export default AgregarTramite
