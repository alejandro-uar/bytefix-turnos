export const validateFormLogin = (input) => {
    const objErrors = {};

    if (!input.username.trim()) {
        objErrors.username = "Username is required!";
    } else if (!/^[a-zA-Z0-9._]{3,20}$/.test(input.username)) {
        objErrors.username = "Username must be 3-15 characters and can include letters, numbers, dots, and underscores.";
    }

    if (!input.password.trim()) {
        objErrors.password = "Password is required!";
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).{4,}$/.test(input.password)) {
        objErrors.password = "Password must be at least 4 characters long and include at least one letter and one number.";
    }

    return objErrors;
};
