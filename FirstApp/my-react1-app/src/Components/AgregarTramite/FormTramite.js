import React from "react";
import Button from "../UI/Button/Button";
import styles from "./FormTramite.module.css";
const FormTramite = (props) => {
  return (
    <form className={`${styles["form-control"]}`}>
      <label>Agregar Tramite</label>
      <input
        id="CodArea"
        type="number"
        placeholder={`Codigo de Area`}
        required
      ></input>
      <input id="CodAnio" type="number" placeholder={`Año`} required></input>
      <input
        id="CodCorrelativo"
        type="number"
        placeholder={`Correlativo de tramite`}
        required
      ></input>
      <input id="Asunto" type="text" placeholder={`Ingrese asunto`} required></input>
      <textarea id="Sumilla" placeholder={`Ingrese Sumilla`}></textarea> 
      <Button>Agregar item</Button>
    </form>
  );
};

export default FormTramite;
