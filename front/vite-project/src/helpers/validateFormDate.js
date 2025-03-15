export const vFormData = (inputs) => {
    const errors = {};
    const { date, time } = inputs;

    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    // Validación de la fecha
    if (!date) {
        errors.date = "La fecha es obligatoria";
    } else if (selectedDateTime < now) {
        errors.date = "No se pueden seleccionar fechas pasadas";
    } else if (selectedDateTime < twentyFourHoursLater) {
        errors.date = "No se pueden agendar citas con menos de 24 horas de antelación";
    } else if (selectedDateTime.getDay() === 0 || selectedDateTime.getDay() === 6) {
        errors.date = "No se pueden agendar citas los fines de semana";
    }

    // Validación de la hora
    if (!time) {
        errors.time = "La hora es obligatoria";
    } else if (!isValidTime(time)) {
        errors.time = "El horario de cita debe estar entre las 8:00 AM y las 6:00 PM";
    }

    return errors;
};

// Función para validar el rango de horario
const isValidTime = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const totalMinutes = hour * 60 + minute;
    const start = 8 * 60; // 8:00 AM en minutos
    const end = 18 * 60; // 6:00 PM en minutos
    return totalMinutes >= start && totalMinutes <= end;
};
