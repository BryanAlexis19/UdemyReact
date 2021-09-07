// import the library from react 
import React,{ useState }from "react";
import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate  from './ExpenseDate';



// The arg 'props' will receive the data sent from App.js as properties
function ExpenseItem(props) {  

 /*  Use the UseState destructuring array to hear the changes*/
  const [title, setTitle] = useState(props.title);
 /*  Declare the function to execute */
  function clickHandler(){  
   setTitle("Updated!");
   console.log("title changed");
 }
  return (
    <li>
    <Card className="expense-item">
        {/* Point to the declared variable betwen curly brackets*/}
        {/* Insert the subcomponent that we've 
        previosly created sending also it's required props */}
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Chage title!</button>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
