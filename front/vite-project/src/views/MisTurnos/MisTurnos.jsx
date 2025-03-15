import { useState, useEffect, useContext } from "react"
// import myAppointments from "../../helpers/myAppointments"
import Appointment from "../../components/Appointment/Appointment"
import AppointmentNot from "../../components/AppointmentNot/AppointmentNot"
import styles from "./MisTurnos.module.css"
import axios from "axios"
import { UsersContext } from "../../context/UsersContext"

const MisTurnos = () => {

    // const [appointments, setAppointments] = useState(myAppointments)
    
    const { getUserAppointment, user, userAppointments } = useContext(UsersContext);
    // Cuando se momnte el componente
    useEffect(()=>{
        if(user){
            getUserAppointment(user)
        }
    },[user])

    return(
        <div className={styles.containerAppoint}>
            <div className={styles.containerCards}> 
                {
                    userAppointments.length>0 ? userAppointments.map( (elem) =>
                        <Appointment 
                          key={elem.id}
                          id={elem.id}
                          date={elem.date}
                          time={elem.time}
                          status={elem.status} 
                        />
                    ):(
                      <AppointmentNot /> 
                    )
                }
            </div>
        </div>

    )
}

export default MisTurnos