import React from "react";
import styles from "./UserItem.module.css";

const UserItem = (props) => {
  if (props.users.length > 0) {
    return (
      <div className={styles.userItem}>
        {props.users.map((user) => (
          <p key={user.id}>
            {`${user.userName} (${user.userAge} years old)`}
          </p>
        ))}
      </div>
    );
  } else {
    return <p>No users found</p>;
  }
};

export default UserItem;

