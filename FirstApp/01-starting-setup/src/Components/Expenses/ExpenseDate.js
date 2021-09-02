import "./ExpenseDate.css";

// This component will be placed in the ExpenseItem Component
function ExpenseDate(props) {
  // Getting the date from an objetc
  const month = props.date.toLocaleString("en-EN", { month: "long" });
  const day = props.date.toLocaleString("en-EN", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
