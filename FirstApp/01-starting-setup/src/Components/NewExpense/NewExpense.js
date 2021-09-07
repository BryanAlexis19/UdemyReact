import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [displayedForm, setDisplayedForm] = useState(false);

  const getExpenseData = (enteredExpense) =>{
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpense      
    }
    
    props.onGetDataExpense(expenseData);
  }

  const btnAddNewExpenseHandler = () => {
    setDisplayedForm(true)
  }

  const btnCancelHandler = () => {
    setDisplayedForm(false)
  }
  return <div className="new-expense">
    {!displayedForm && <button type="button" onClick={btnAddNewExpenseHandler}>Add New Expense</button> }    
    {displayedForm && <ExpenseForm onGetExpense={getExpenseData} onCancel={btnCancelHandler} /> }    
  </div>;
};

export default NewExpense;

///racfe