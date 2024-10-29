const express =require('express')
const port = 1277
const app= express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(505).json("krishna");
})

app.listen(port,()=>{
   // console.log("Server is running in port:"+ port)

    console.log(`Server is running in port:${port}`)//port dynamic var(template literal)
})


