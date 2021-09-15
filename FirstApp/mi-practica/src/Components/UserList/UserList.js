import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css"

const UserList = (props) => {
  return (
    <Card className={styles.userList}>
      <ul >
        {props.users.map(users => (
          <UserItem
            key={users.id}
            id={users.id}
            onDelete = {props.onClickToDelete}                                    
          >{`${users.userName} (${users.userAge} years old)`}
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
