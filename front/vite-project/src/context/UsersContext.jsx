import axios from "axios";
import { createContext, useState } from "react";

export const UsersContext = createContext({
    user: "",
    userAppointments: [],
    userLogin: async () => {},
    userRegister: async () => {},
    logoutUser: () => {},
    getUserAppointment: async () => {},
    cancelAppointment: async () => {},
    createAppointment: async () => {}
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("userId") || "");
    const [userAppointments, setUserAppointments] = useState([]);

    const userLogin = async (userData) => {
        const response = await axios.post("http://localhost:3000/users/login", userData);
        localStorage.setItem("userId", response.data.user.id);
        setUser(response.data.user.id);
    };

    const userRegister = async (userData) => {
        await axios.post("http://localhost:3000/users/register", userData);
    };

    const logoutUser = () => {
        localStorage.clear();
        setUser("");
        setUserAppointments([]);
    };

    const getUserAppointment = async (userId) => {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        setUserAppointments(response.data.appointments);
    };

    const cancelAppointment = async (appointmentId) => {
        await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`);
        const appointmentUpdate = userAppointments.map((appointment) => {
            if (appointment.id === appointmentId) {
                return { ...appointment, status: "cancelled" };
            }
            return appointment;
        });
        setUserAppointments(appointmentUpdate);
    };

    const createAppointment = async (values) => {
        const appointmentData = {
            ...values,
            userId: user
        };
        await axios.post("http://localhost:3000/appointments/schedule", appointmentData);
    }
    

    const value = {
        user,
        userAppointments,
        userLogin,
        userRegister,
        logoutUser,
        getUserAppointment,
        cancelAppointment,
        createAppointment
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
};
