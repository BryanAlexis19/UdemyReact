import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import AgregarTramite from "./Components/AgregarTramite/AgregarTramite";
import Login from "./Components/Login/Login";
import Wraper from "./Components/UI/Wraper/Wraper";
import TramiteList from "./Components/TramiteList/TramiteList";

const tramites = [
  {
    id: "01",
    CodArea: "6751",
    CodAnio: "2021",
    CodCorrel: "01",
    Asunto: "Pago de pensiones adultos mayores",
    Sumilla:
      "Se describe el pago de las pensiones para los adulto mayores de 65 a mas.",
  }
];


function App() {
  const [NewTramites, setNewTramites] = useState(tramites);


  const receiveTramiteHandler = (EnteredTramiteData) => {
    //Let's use an state that manages the receiving users and merge them into the old ones
    setNewTramites((prevTramites) => {
      return [EnteredTramiteData, ...prevTramites];
    });    
  };

  const deleteHandler = (tramiteId) => {
    setNewTramites(prevTramites =>{
      const updatedTramites = prevTramites.filter(tramitex => tramitex.id !== tramiteId);
      return updatedTramites;
    })
  }

  let tramiteListContent;

  if(NewTramites.length > 0){
    tramiteListContent = (
      <TramiteList tramitex = {NewTramites}
      onClickToDelete={deleteHandler}
      className="bg3"></TramiteList>
    );
  }else{
    tramiteListContent = (
      <Wraper className="bg9">
        <p>No se encontraron tramites registrados. Agrege uno.</p>
      </Wraper>
    );
  }

  return (
    <div className={styles.wraper}>
      <Header />
      <Nav />
      <AgregarTramite
        className={`bg2`}
        onReceiveTramite={receiveTramiteHandler}
      />
      {tramiteListContent}      
      <Footer />
    </div>
  );
}

export default App;
