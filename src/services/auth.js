import axios from "axios";

const API_URL = 'http://localhost:8000';

const register = (name, email, password) => 
{
    return axios.post(`${API_URL}/v1/auth/signup`, {
        name: name,
        email: email,
        // phone_number: phone_number,
        password: password,
    });
}

const login = (email, password) =>
{
    return axios.post(`${API_URL}/v1/auth/signin`, {
        email: email,
        password: password,
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    login,
    logout,
};

export default authService;