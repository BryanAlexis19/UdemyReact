import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expense from "./Components/Expenses/Expense";

const standardExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },


];

function App() {
  // Here we have an objet wich contains data to fill in the components

  //Lets use an state to manage the receiving expenses and merge into the old ones
  const [expenses, setExpenses] = useState(standardExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    
  };

  return (
    <div>
      <NewExpense onGetDataExpense={addExpenseHandler} />      
      <Expense item={expenses}></Expense>                
    </div>
  );
}

export default App;
