
import axios from 'axios'


const API = 'http://localhost:2000'


//using template literals
const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const getProductsCount = () => axios.get(`${API}/products/count`)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct= (id) => axios.delete(`${API}/products/delete/${id}`)

//orders
const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)


const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const deleteUser=(id)=>axios.delete(`${API}/users/delete/${id}`)
// const Login = (data) => axios.post(`${API}/auth/login`, data)

const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)




export { 
        getProducts,
        getOrders,
        getUsers,
        Login,
        Register,
        addProduct,
        editProduct,deleteProduct,
        addUser,
        editUser,
        deleteUser,
        getOrdersCount,
        getProductsCount,
        getUsersCount
    }
