const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://krishnaveni5104:krishna1234@in-aws.o5wa3.mongodb.net/krishna?retryWrites=true&w=majority&appName=In-AWS")
const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')