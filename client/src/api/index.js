import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
})


export const login = (payload) => api.post(`/login`, payload)
export const register = payload => api.post(`/sign_up`, payload, )
export const validate = (payload, config) => api.post(`/validate`, payload, config);
export const updateUserById = (id, payload) => api.put(`/save_weight/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = username => api.get(`/get_weight_history`, { params: { username } })
const apis = {
    login,
    register,
    updateUserById,
    deleteUserById,
    getUserById,
    validate
}

export default apis