import "./App.css";
import AddUser from "./Components/AddNewUser/AddUser";
import UserList from "./Components/UserList/UserList";
import React, { useState } from "react";

const initUsers = [
  // { id: "01", userName: "Sofia", userAge: 22 },
  // { id: "02", userName: "Bryan", userAge: 23 },
];

function App() {
  const [users, setUsers] = useState(initUsers);

  const AddUserHandler = (enteredUser) => {
    //Let's use an state that manages the receiving users and merge them into the old ones
    setUsers((prevUsers) => {
      return [enteredUser, ...prevUsers];
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <AddUser users={users} onAddUser={AddUserHandler}></AddUser>
        <UserList users={users}></UserList>
      </header>
    </div>
  );
}

export default App;
