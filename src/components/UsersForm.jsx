import axios from "axios";
import { useForm } from "react-hook-form";


const UsersForm = ({deselectedUser, getUsers, selectUsers}) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => { 
        
        if (selectUsers) {
            axios
              .put(
                `https://users-crud1.herokuapp.com/users/${selectUsers.id}/`,
                data
              )
              .then(() => {
                getUsers(); //inserta las modificaciones
                deselectedUser(); //deselecciona el usuario para que no se sobrescriba
              })
              .catch((error) => console.log(error.response?.data));
          } else {
            axios
              .post("https://users-crud1.herokuapp.com/users/", data)
              .then(() => getUsers())
              .catch((error) => console.log(error.response?.data));
          }
    }

    const messages = {
        req: "This value is necesary for continue"
       };
    return (
        <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
            <div className='campoInput'>
                <label htmlFor="first_name">Name</label>
                <br />
                <input id="first_name" type="text" name="first_name" {...register("first_name", { required: messages.req })} />
            </div>
            <div className='campoInput'>
                <label>LastName</label>
                <br />
                <input type="text" name="last_name" {...register("last_name", { required: messages.req })} />
            </div>
            <div className='campoInput'>
                <label>email</label>
                <br />
                <input type="email" name="email" {...register("email", { required: messages.req } )} />
            </div>
            <div className='campoInput'>
                <label>Password</label>
                <br />
                <input type="password" name="password" {...register("password", { required: messages.req })} />
            </div>
            <div className='campoInput'>
                <label>Birthday</label>
                <br />
                <input type="date" name="birthday" {...register("birthday", { required: messages.req })} />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default UsersForm;