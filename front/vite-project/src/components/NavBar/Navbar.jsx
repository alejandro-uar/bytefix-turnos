// NavBar.js
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import styles from "./NavBar.module.css";
import Swal from "sweetalert2";

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { user, logoutUser } = useContext(UsersContext);

    const handleLogout = () => {
        logoutUser()
        Swal.fire({
            icon: "warning",
            title: "Tu session fue cerrada con exito!"
        })
        navigate('/')
    }

    return (
        <nav className={styles.nav}>
            {user ? (
                <>
                    <Link to="/misturnos" className={`${styles.link} ${location.pathname === "/misturnos" ? styles.active : ""}`}>
                        Mis Turnos |
                    </Link>
                    <Link to="/agendarturno" className={`${styles.link} ${location.pathname === "/agendarturno" ? styles.active : ""}`}>
                        Agendar Turno |
                    </Link>
                    <button onClick={()=>handleLogout()} className={`${styles.link} ${styles.btn}`}>
                        Cerrar Sesión 
                    </button>
                </>
            ) : (
                <>
                    <Link to="/" className={`${styles.link} ${location.pathname === "/" ? styles.active : ""}`}>
                        Home |
                    </Link>
                    <Link to="/login" className={`${styles.link} ${location.pathname === "/login" ? styles.active : ""}`}>
                        Login |
                    </Link>
                    <Link to="/register" className={`${styles.link} ${location.pathname === "/register" ? styles.active : ""}`}>
                        Register
                    </Link>
                </>
            )}
        </nav>
    );
};

export default NavBar;
