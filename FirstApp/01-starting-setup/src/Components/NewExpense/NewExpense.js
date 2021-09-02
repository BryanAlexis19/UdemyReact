import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const getExpenseData = (enteredExpense) =>{
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    }
    
    props.onGetDataExpense(expenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onGetExpense={getExpenseData} />
  </div>;
};

export default NewExpense;
