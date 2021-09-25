import React from 'react'
import Wraper from '../UI/Wraper/Wraper'
import FormTramite from './FormTramite'

const AgregarTramite = (props) => {

    const getTramiteHandler = (TramiteData)=>{
        props.onReceiveTramite(TramiteData);
    }
    return (
        <Wraper className={props.className}>
            <FormTramite onGetTramite={getTramiteHandler}></FormTramite>
        </Wraper>
    )
}

export default AgregarTramite
