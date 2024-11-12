
import axios from 'axios'


const API = 'http://localhost:2000'


//using template literals
const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`, product)
const editProduct = (product, id) => axios.put(`${API}/products/edit/${id}`, product)
const deleteProduct= (id) => axios.delete(`${API}/products/delete/${id}`)

//orders
const getOrders = () => axios.get(`${API}/orders/all`)
//const addOrder=(order)=>axios.post(`${API}/orders/add`,order)
const addOrder = (order) => axios.post(`${API}/orders/add`, order)
const deleteOrder=(id)=>axios.delete(`${API}/orders/delete/${id}`)


const getUsers = () => axios.get(`${API}/users/all`)
// const Login = (data) => axios.post(`${API}/auth/login`, data)

const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)




export { getProducts ,getOrders,getUsers,Login,Register,addProduct,editProduct,deleteProduct,addOrder,deleteOrder}
