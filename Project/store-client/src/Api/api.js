
import axios from 'axios'


const API = 'http://localhost:2000'
// const api = 'http://localhost:2000/orders/all'

//using template literals
const getProducts = () => axios.get(`${API}/products/all`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)



export { getProducts ,getOrders,getUsers}
