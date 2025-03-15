import { useContext, useState } from "react"
import { validateFormRegister } from "../../helpers/valideteFormRegister"
import styles from "./Register.module.css"
import registerSvg from "../../assets/register.svg"
import axios from "axios"
import Swal from "sweetalert2"
import { UsersContext } from "../../context/UsersContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
    
    const { userRegister } = useContext(UsersContext)
    const navigate = useNavigate()
    
    const [form, setForm] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    })

    const [error, setError] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const copyFormData = {
            ...form,
            [e.target.name]: e.target.value
        }

        const objErros = validateFormRegister(copyFormData)
        setForm(copyFormData)
        setError(objErros)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userRegister(form)
            Swal.fire({
                icon: "success",
                title: "Usuario registrado con exito."
            })
            navigate('/login')
        } catch (err) {
            if (err.response.data.details.includes("email")) {
                Swal.fire({
                    icon: "error",
                    title: "Ya existe el usuario con el email ingresado.",
                    text: "Intente con otro email."
                })
            } else if (err.response.data.details.includes("username")) {
                Swal.fire({
                    icon: "error",
                    title: "Ya existe el usuario con el username ingresado.",
                    text: "Intente con otro username."
                })
            } else if (err.response.data.details.includes("nDni")) {
                Swal.fire({
                    icon: "error",
                    title: "Ya existe el usuario con el nDni ingresado.",
                    text: "Intente con otro DNI."
                })
            }
        }
    }

    return (
        <div className={styles.containerRegister}>
            <img src={registerSvg} alt="registerSvg" />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => handleInputChange(e)}  
                    />
                    <span>{error.name ? error.name : ""}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => handleInputChange(e)}  
                    />
                    <span>{error.email ? error.email : ""}</span>
                </div>
                <div>
                    <label>Birthdate</label>
                    <input
                        type="date"
                        name="birthdate"
                        onChange={(e) => handleInputChange(e)}  
                    />
                    <span>{error.birthdate ? error.birthdate : ""}</span>
                </div>
                <div>
                    <label>nDni</label>
                    <input
                        type="text"
                        name="nDni"
                        onChange={(e) => handleInputChange(e)}  
                    />
                    <span>{error.nDni ? error.nDni : ""}</span>
                </div>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => handleInputChange(e)}  
                    />
                    <span>{error.username ? error.username : ""}</span>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <span>{error.password ? error.password : ""}</span>
                </div>
                <button 
                    type="submit"
                    disabled={error.name || error.email || error.birthdate || error.nDni || error.username || error.password}
                >Send</button>
            </form>
        </div>
    )
}

export default Register;