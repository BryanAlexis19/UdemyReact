import React from 'react'
import Card from '../UI/Card'
import UserItem from './UserItem'

const UserList = (props) => {
    return (
        <Card>
            <UserItem users={props.users}></UserItem>
        </Card>
    )
}

export default UserList
