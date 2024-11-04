const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://krishnaveni:123456at@in-aws.spoj0.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')