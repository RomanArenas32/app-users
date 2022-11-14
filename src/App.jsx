import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from './components/Header';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList'


function App() {

  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState(null);

  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data))
  }, []);
  
  const getUsers = ()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data))
  }
  const selectUsers = (user) => {
    setSelectUser(user);
  };
  const deselectedUser = ()=> setSelectUser(null);

  const deleteUser = (id)=>{
    const filteredUsers = users.filter(
      (users) => users.id !== id
    );
    setUsers(filteredUsers);
  }
  const editUser = (user)=>{
    setSelectUser(user)
  }
  return (

    <div className="App" >
      <Header />
      <div className='formParent'>
        <UsersForm 
        deselectedUser= {deselectedUser}
        getUsers={getUsers}
        selectUsers={selectUsers}
        />
      </div>
      <div className='formParent2'>
        {
          users.map(user => (
            <UsersList user={user} key={user.email} deleteUser={deleteUser} editUser={editUser}/>
          ))
        }
      </div>

    </div>
  )
}

export default App
