import { useContext, useState } from "react"
import { validateFormLogin } from "../../helpers/validateFormLogin"
import styles from "./Login.module.css"
import svgLogin from "../../assets/login.svg"
import axios from "axios"
import { UsersContext } from "../../context/UsersContext"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const { userLogin } = useContext(UsersContext)
 
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e)=>{
        const copyLogin = {
            ...login,
            [e.target.name]:e.target.value
        }
        const objErrors = validateFormLogin(copyLogin)
        setLogin(copyLogin)
        setError(objErrors)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            try {
                await userLogin(login)
                Swal.fire({
                    icon: "success",
                    title: "Usuario logeado con exito!"
                })
                navigate('/misturnos')
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "User o pasword incorrecto",
                    text: "Intente nuevamente!"
                })
            }
    }

    return(
        <div className={styles.containerForm}>
            <div className={styles.containerSvg}>
                <img src={svgLogin} alt="svgLogin" />
            </div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username"
                        onChange={(e)=>handleInputChange(e)}  
                    />
                    <span>{ error.username ? error.username : "" }</span>
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        onChange={(e)=>handleInputChange(e)}
                    />
                    <span>{ error.password ? error.password : "" }</span>
                </div>
                <div>
                    <button 
                        type="submit"
                        disabled = { error.username || error.password }
                    >Login</button>
                </div>
            </form>
        </div>
    )    
}

export default Login