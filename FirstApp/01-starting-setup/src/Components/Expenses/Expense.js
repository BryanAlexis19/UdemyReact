import React, { useState } from "react";
import "./expense.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const getYear = (yearValue) => {
    setSelectedYear(yearValue);
    console.log(yearValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYearValue={selectedYear} onGetYear={getYear} />
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
