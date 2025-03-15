export const validateFormRegister = (input) => {
    const objErrors = {};
    
    if (!input.name.trim()) {
        objErrors.name = "Name is required!";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,50}$/.test(input.name)) { 
        objErrors.name = "Invalid name format!"; // Cambié 'username' a 'name'
    }

    if (!input.email.trim()) {
        objErrors.email = "Email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
        objErrors.email = "Invalid email format";
    }

    // Validar luego!
    if (!input.birthdate.trim()) {
        objErrors.birthdate = "Birthdate is required!";
    }

    if (!input.nDni.trim()) {
        objErrors.nDni = "DNI is required!";
    } else if (!/^\d{7,8}$/.test(input.nDni)) {
        objErrors.nDni = "DNI must be 7 or 8 digits!";
    }

    if (!input.username.trim()) {
        objErrors.username = "Username is required!";
    } else if (!/^[a-zA-Z0-9._]{3,15}$/.test(input.username)) {
        objErrors.username = "Username must be 3-15 characters and can include letters, numbers, dots, and underscores.";
    }

    if (!input.password.trim()) {
        objErrors.password = "Password is required!";
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/.test(input.password)) {
        objErrors.password = "Password must be at least 4 characters long and include at least one letter and one number.";
    }

    return objErrors;
};
