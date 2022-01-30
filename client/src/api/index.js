import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
})


export const login = (payload) => api.post(`/login`, payload);
export const register = payload => api.post(`/sign_up`, payload);
export const getUserById = (payload, config) => api.post(`/get_weight_history`, payload, config);
export const updateUserById = (payload, config) => api.put(`/save_weight`, payload, config);

const apis = {
    login,
    register,
    updateUserById,
    getUserById
}

export default apis