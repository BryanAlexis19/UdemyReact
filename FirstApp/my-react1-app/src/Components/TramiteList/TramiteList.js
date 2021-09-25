import React from "react";
import Wraper from "../UI/Wraper/Wraper";
import TramiteItem from "./TramiteItem";
import styles from "./TramiteList.module.css";

const TramiteList = (props) => {
  console.log(props.tramitex)
  return (
    <Wraper className={props.className}>
      <div className={styles.tramiteList}>
      <ul>
        {props.tramitex.map(tramites => (
          <TramiteItem
            key={tramites.id}
            id={tramites.id}
            onDelete={props.onClickToDelete}
          >
            {`NIT  : ${tramites.CodArea} ${tramites.CodAnio} ${tramites.CodCorrel}`} 
            <br />
            {`Asunto  : ${tramites.Asunto}`} 
            <br />
            {`Sumilla  : ${tramites.Sumilla}`}
          </TramiteItem>
        ))}
      </ul>
      </div>
    </Wraper>
  );
};

export default TramiteList;
