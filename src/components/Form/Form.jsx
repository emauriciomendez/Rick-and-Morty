import React from "react"
import st from './Form.module.css'
import { validate } from "./validation"
    

export default function Form({login}){
   const [userData,setUserData]=React.useState({username:'', password:''})
   const [errors,setErrors]=React.useState({username:'', password:''})
   const handleInputChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
        setErrors(validate({...userData,[e.target.name]:e.target.value}))

   }
   const handleSubmit=(e)=>{
    login(userData)
   }
    return(<div className={st.divContainer}>
        <form onSubmit={handleSubmit}>
            <h1 className={st.h1T} > Rick and Morty </h1>
            <div className={st.divContainer2}>
            <label htmlFor="username">Usuario:</label>
            <input type='text' name="username" value={userData.username}
                    id="username" placeholder="Ingrese el email..."
                    onChange={handleInputChange} className={errors.username&&st.warning}
                    />

            <label htmlFor="password">Contraseña:</label>
            <input name="password" value={userData.password}
                    id="password" type='password' placeholder="Ingrese la contraseña..."
                    onChange={handleInputChange} className={errors.password&&st.warning}
                    />
            </div>
            <button> LOGIN </button>
            <p className={st.danger}>{errors.username}</p>
            <p className={st.danger}>{errors.password}</p>
    
    </form>
</div>);

}
