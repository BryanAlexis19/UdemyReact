import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //--------------------- SComponent States -----------------------------
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //--------------------- Form Submit Handler -----------------------------
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      setError({
        title: "Invalid Input",
        message: "All the inputs should be filled",
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsValid(false);
      setError({
        title: "Invalid Input",
        message: "The age is invalid. It should be greater than 0",
      });
      return;
    }
    //Create a const (objetc) that stores the entered name and age.
    const userData = {
      id: Math.random().toString(),
      userName: enteredName,
      userAge: enteredAge,
    };
    //Call the function that sends the userData to the app component
    props.onAddUser(userData);

    nameInputRef.current.value = '';
    ageInputRef.current.value = ''; 
    setIsValid(true);
  };

/*   //--------------------- NameInputHandler -------------------------------
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
  }; */

  //------------------------- Button Hnadler ---------------------------

  const ErrorHandler = (e) => {
    setError(null);
  };

  //--------------------- Component render-------------------------------
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card>
        <form
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
          onSubmit={formSubmitHandler}
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder={!isValid ? "Required field!" : "Enter your name"}
            ref = {nameInputRef}
          ></input>
          <label htmlFor="userage">Age (Years)</label>
          <input
            id="userage"
            type="number"
            step="1"
            max="120"
            placeholder={!isValid ? "Required field" : "Enter your age"}
            ref = {ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
