const express = require('express')
const app = express()
const port = 2000
app.use(express.json())//incoming request
const db = require('./config/db')
const Products = require('./routes/ProductRoute')
const Orders = require('./routes/OrderRoute')



app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
//localhost:2000
app.use('/products',Products)
//app.use('/orders'.Orders)
//localhost
app.listen(port, (() => console.log(`Listening on ${port}`)))
//mongodb+srv://krishnaveni:<db_password>@in-aws.spoj0.mongodb.net/