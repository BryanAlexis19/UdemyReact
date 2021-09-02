import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Optional using an object and functions
  // const [userInput, setUserInput] = {
  //   enteredTitle = "",
  //   enteredAmount = "",
  //   enterededDate = ""
  // }

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // Optional with object
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: e.target.value };    
    // });
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // Optional with object
    // setUserInput((prevState) =>{
    //   return {...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // Optional with object
    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: e.target.value};
    // });
  };

  const formSubmitHandler = (e) =>{
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }


    props.onGetExpense(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
