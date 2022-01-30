import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
})


export const login = (payload) => api.post(`/login`, payload);
export const register = payload => api.post(`/sign_up`, payload);
export const getUserById = (payload) => api.get(`/get_weight_history`, payload);
export const updateUserById = (payload, config) => api.put(`/save_weight`, payload, config);

const apis = {
    login,
    register,
    updateUserById,
    getUserById
}

export default apis