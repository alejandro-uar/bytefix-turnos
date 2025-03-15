import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import NavBar from "./components/NavBar/Navbar";
import Register from "./views/Register/Register";
import NotFound from "./views/NotFound/NotFound"
import AgendarTurno from "./views/AgendarTurno/AgendarTurno";
import styles from "./App.module.css"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "./context/UsersContext";

function App() {
  
  const location = useLocation()
  const navigate = useNavigate()

  //const [isLogged, setIsLogged] = useState(true);
  const {user} = useContext(UsersContext)
  
  useEffect(()=>{
    
    if(user && location.pathname === "/login" || user && location.pathname === "/register"){
       navigate("/")
    }

  },[location.pathname, user])
  
  return (
    <div className={styles}>
      <NavBar />
      <Routes>
        {user ? (
          <>
            <Route path="/misturnos" element={<MisTurnos />} />
            <Route path="/agendarturno" element={<AgendarTurno />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />}/>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
