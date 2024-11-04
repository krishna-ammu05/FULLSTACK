const express =require('express')
const port = 1277
const app= express()

app.listen(port,()=>{
    console.log("Server is running in port:"+ port)

    console.log(`Server is running in port:${port}`)//port dynamic var(template literal)
})


