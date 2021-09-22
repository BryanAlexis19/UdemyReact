import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Card className={`${styles.modal} ${props.ClassName}`}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <main>
        <p>{props.message}</p>
      </main>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
