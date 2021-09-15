import "./App.css";
import AddUser from "./Components/AddNewUser/AddUser";
import UserList from "./Components/UserList/UserList";
import React, { useState } from "react";
import Card from "./Components/UI/Card";

const initUsers = [
  { id: "01", userName: "Sofia", userAge: 22 },
  { id: "02", userName: "Bryan", userAge: 23 },
];

function App() {
  const [users, setUsers] = useState(initUsers);

  const AddUserHandler = (enteredUser) => {
    //Let's use an state that manages the receiving users and merge them into the old ones
    setUsers((prevUsers) => {
      return [enteredUser, ...prevUsers];
    });
  };

  const deleteHandler = (userId) => {
    setUsers(prevUsers =>{
      const updateUsers = prevUsers.filter(userx => userx.id !== userId);
      return updateUsers;
    })
  }

  let userListContent;

  if (users.length > 0) {
    userListContent = (
      <UserList users={users} onClickToDelete={deleteHandler}></UserList>
    );
  } else {
    userListContent = (
      <Card>
        <p>No users found. Maybe add one?</p>
      </Card>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddUser users={users} onAddUser={AddUserHandler}></AddUser>
        {userListContent}
      </header>
    </div>
  );
}

export default App;
