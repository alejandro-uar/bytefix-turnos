import { useContext } from "react";
import styles from "./Appointment.module.css";
import { UsersContext } from "../../context/UsersContext";
import Swal from "sweetalert2";

const Appointment = ({ id, date, time, status }) => {
    const { cancelAppointment } = useContext(UsersContext);

    const handleCancel = async (id) => {
        try {
            await cancelAppointment(id);
            Swal.fire({
                icon: "warning",
                color: "red",
                text: "Turno cancelado con éxito!"
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "No se pudo cancelar el turno, intente nuevamente"
            });
        }
    };

    return (
        <div className={styles.card}>
            <h1>Turno: {id}</h1>
            <h2>Date: {date}</h2>
            <h3>Time: {time}</h3>
            <h4>Status: {status}</h4>
            <button
                disabled={status === "cancelled"}
                onClick={() => handleCancel(id)}
            >
                Cancelar turno
            </button>
        </div>
    );
};

export default Appointment;
