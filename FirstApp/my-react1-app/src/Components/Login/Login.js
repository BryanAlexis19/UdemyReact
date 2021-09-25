import React from 'react'
import Wraper from "../UI/Wraper/Wraper"
import styles from "./Login.module.css"
import Button from "../UI/Button/Button"
const Login = (props) => {
    return (
        <Wraper className={`bg7`}>
            <form className={`${styles["form-control"]}`}>
      <label>Inicio de Sesion de Usuario</label>
      <input
        id="NombreUsuario"
        type="text"
        placeholder={`Ingrese nombre de usuario`}
        required
      ></input>
      <input
        id="ClaveUsuario"
        type="password"
        placeholder={`Ingrese clave de usuario`}
        required
      ></input>
      <Button>Agregar item</Button>
    </form>
        </Wraper>
    )
}

export default Login
