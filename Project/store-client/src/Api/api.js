
import axios from 'axios'


const API = 'http://localhost:2000/products/all'
const api = 'http://localhost:2000/orders/all'


const getProducts = () => axios.get(API)
const getOrders = () => axios.get(api)


export { getProducts }
export { getOrders }