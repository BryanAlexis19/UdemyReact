import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate  from './ExpenseDate';



// The arg 'props' will receive the data sent from App.js as properties
function ExpenseItem(props) {  

  return (
    <Card className="expense-item">
        {/* Point to the declared variable betwen curly brackets*/}
        {/* Insert the subcomponent that we've 
        previosly created sending also it's required props */}
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
