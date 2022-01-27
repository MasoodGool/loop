import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/users',
})


export const getAllUsers = () => api.get(`/get/all`)
export const insertUser = payload => api.post(`/user`, payload)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    getAllUsers,
    insertUser,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis