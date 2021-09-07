import React, { useState } from "react";
import "./expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const getYear = (yearValue) => {
    setSelectedYear(yearValue);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYearValue={selectedYear} onGetYear={getYear} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expense;
