import { useContext, useState } from "react"
import { vFormData } from "../../helpers/validateFormDate"
import { UsersContext } from "../../context/UsersContext"
import styles from "./AgendarTurno.module.css"

import Swal from "sweetalert2"

const AgendarTurno = () => {
    const { createAppointment } = useContext(UsersContext);

    const [form, setForm] = useState({
        date: "",
        time: ""
    });

    const [error, setError] = useState({
        date: "La fecha es requerida",
        time: "La hora es requerida"
    });

    const handleInputChange = (e) => {
        const copyForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        const objErrors = vFormData(copyForm);
        setForm(copyForm);
        setError(objErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAppointment(form);
            Swal.fire({
                icon: "success",
                title: "Turno agendado exitosamente!"
            });
            setForm({
                date: "",
                time: ""
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error?.response?.data?.details || "Error en el servidor",
                text: "¡Inténtelo de nuevo!"
            });
        }
    };

    return (
        <div className={styles.containerForm}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Fecha</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.date} // Corregido
                    onChange={(e) => handleInputChange(e)}
                />
                {error.date && <div className={styles.containerErr}>{error.date}</div>}
                
                <label>Hora</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={form.time} // Agregado para consistencia
                    onChange={(e) => handleInputChange(e)}
                />
                {error.time && <div className={styles.containerErr}>{error.time}</div>}
                
                <button type="submit" disabled={error.date || error.time}>
                    Agendar
                </button>
            </form>
        </div>
    );
};

export default AgendarTurno;