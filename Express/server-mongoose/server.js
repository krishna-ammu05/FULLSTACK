const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 2000
app.use(express.json())//incoming request
const db = require('./config/db')
const Products = require('./routes/ProductRoute')
const Orders = require('./routes/OrderRoute')
const Users = require('./routes/UserRoute')
const Auth = require('./routes/AuthRoute')


app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
//localhost:2000
app.use('/products',Products)
app.use('/orders',Orders)
app.use('/users',Users)
app.use('/auth', Auth)
//localhost
app.listen(port, (() => console.log(`Listening on ${port}`)))
//mongodb+srv://krishnaveni:<db_password>@in-aws.spoj0.mongodb.net/