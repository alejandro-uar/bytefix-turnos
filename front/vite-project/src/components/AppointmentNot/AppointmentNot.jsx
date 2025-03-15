import calendarSvg from "../../assets/calendar.svg"
import styles from "./AppointmentNot.module.css"

const AppointmentNot = ()=>{
    return (
        <div className={styles.notInfo}>
            <div className={styles.containerSvg}>
                <img src={calendarSvg} alt="calendarSvg" />
            </div>
        <p>¡Opss! no hay datos disponibles por el momento</p>
        </div>
    )
}

export default AppointmentNot