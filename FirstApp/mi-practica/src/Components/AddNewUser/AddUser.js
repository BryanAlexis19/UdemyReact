import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  //--------------------- SComponent States -----------------------------
  const [isValid, setIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("Mac");
  const [enteredAge, setEnteredAge] = useState("");


  //--------------------- Form Submit Handler -----------------------------
  const formSubmitHandler = (e) => {
    e.preventDefault();
    
    if(enteredName.trim().length===0 || enteredAge.trim().length===0){
      setIsValid(false);
      return;
    }
    //Create a const (objetc) that stores the entered name and age.
    const userData = {
      id: Math.random().toString(),
      userName: enteredName,
      userAge: enteredAge
    }
    //Call the function that sends the userData to the app component
    props.onAddUser(userData);

    setEnteredName("");
    setEnteredAge("");
    setIsValid(true);
  }

  //--------------------- NameInputHandler -------------------------------
  const nameInputHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setEnteredName(e.target.value);
  };

  //--------------------- AgeInputHandler -------------------------------
  const AgeInputHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setEnteredAge(e.target.value);
  };

  //--------------------- Component render-------------------------------
  return (
    <>
    <ErrorModal title={"Titulo del modal"} message={"Something went wrong"} onClick={""}></ErrorModal>
    <Card>
      <form        
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        onSubmit={formSubmitHandler}
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameInputHandler}
          placeholder={!isValid ? 'Required field!' : 'Enter your name'}
        ></input>
        <label htmlFor="userage">Age (Years)</label>
        <input
          id="userage"
          type="number"
          min="1"
          step="1"
          max="120"
          value={enteredAge}
          onChange={AgeInputHandler}
          placeholder={!isValid ? 'Required field' : 'Enter your age'}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
