import React, { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./FormTramite.module.css";
const FormTramite = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [enteredCodArea, setEnteredCodArea] = useState("");
  const [enteredCodAnio, setEnteredCodAnio] = useState("");
  const [enteredCodCorrel, setEnteredCodCorrel] = useState("");
  const [enteredAsunto, setEnteredAsunto] = useState("");
  const [enteredSumilla, setEnteredSumilla] = useState("");

  //--------------------- FormSubmit Handler-------------------------------

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      enteredCodArea.trim().length === 0 ||
      enteredCodAnio.trim().length === 0 ||
      enteredCodCorrel.trim().length === 0 ||
      enteredAsunto.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    //Create a const (objetc) that stores the whole data entered.
    const TramiteData = {
      id: Math.random().toString(),
      CodArea: enteredCodArea,
      CodAnio: enteredCodAnio,
      CodCorrel: enteredCodCorrel,
      Asunto: enteredAsunto,
      Sumilla: enteredSumilla
    }

    //Call the component function that send the data to app comp
    props.onGetTramite(TramiteData);

    //Clean the data fields
    setEnteredCodArea("");
    setEnteredCodAnio("");
    setEnteredCodCorrel("");
    setEnteredAsunto("");
    setEnteredSumilla("");

    //Change the status value to true
    setIsValid(true);
    
  };

    //--------------------- ALL INPUT HANDLERS-------------------------------

   const AreaInputHandler = (e) => {
     if(e.target.value.trim().length===0){
       setIsValid(false)
     }else{
        setIsValid(true)
     }
     setEnteredCodArea(e.target.value);
   }

   const AnioInputHandler = (e) => {
    if(e.target.value.trim().length===0){
      setIsValid(false)
    }else{
       setIsValid(true)
    }
    setEnteredCodAnio(e.target.value);
  }

  const CorrelInputHandler = (e) => {
    if(e.target.value.trim().length===0){
      setIsValid(false)
    }else{
       setIsValid(true)
    }
    setEnteredCodCorrel(e.target.value);
  }

  const AsuntoInputHandler = (e) => {
    if(e.target.value.trim().length===0){
      setIsValid(false)
    }else{
       setIsValid(true)
    }
    setEnteredAsunto(e.target.value);
  }

  const SumillaInputHandler = (e) => {
    setEnteredSumilla(e.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler} className={`${styles["form-control"]}`}>
      <label>Agregar Tramite</label>
      <input
        id="CodArea"
        type="number"
        placeholder={`Codigo de Area`}
        value={enteredCodArea}
        onChange={AreaInputHandler}
        required
      ></input>
      <input
        id="CodAnio"
        type="number"
        placeholder={`Año`}
        value={enteredCodAnio}
        onChange={AnioInputHandler}
        required
      ></input>
      <input
        id="CodCorrel"
        type="number"
        placeholder={`Correlativo de tramite`}
        value={enteredCodCorrel}
        onChange={CorrelInputHandler}
        required
      ></input>
      <input
        id="Asunto"
        type="text"
        placeholder={`Ingrese asunto`}
        value={enteredAsunto}
        onChange={AsuntoInputHandler}
        required
      ></input>
      <textarea
        id="Sumilla"
        placeholder={`Ingrese Sumilla`}
        value={enteredSumilla}
        onChange={SumillaInputHandler}
      ></textarea>
      <Button type="submit">Agregar item</Button>
    </form>
  );
};

export default FormTramite;
