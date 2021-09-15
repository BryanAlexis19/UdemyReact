import React from "react";
// import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id)
  }
  return (    
      <li onClick={deleteHandler}>{props.children}</li>    
  );
};

export default UserItem;
