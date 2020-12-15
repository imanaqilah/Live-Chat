import React from 'react';

const UserList = ({ users, currentUser }) => {

    return (
        <>
            <h1>User List</h1>
            <ul>
                {
                    users.map((u, idx) => {
                        return <li
                            key={idx + "-user"}
                            style={{ backgroundColor: u.username == currentUser.username ? "green" : "#333333" }}
                        >{u.username}</li>
                    })
                }

            </ul>
        </>

    )
}

export default UserList;