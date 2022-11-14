import React from 'react'

const UsersList = ({ user, deleteUser, editUser }) => {


    return (

        <div className='contenedor'>
            <div className='contenedor-info'>
                <h3>{user.first_name} {user.last_name}</h3>
                <h4>{user.email}</h4>
                <h4>{user.birthday}</h4>
            </div>
            <div className='contenedor-info'>
                <button onClick={()=> editUser(user)}>Edit</button>
                <button onClick={()=> deleteUser(user.id)}>Delete</button>
            </div>
        </div>

    );
}

export default UsersList;