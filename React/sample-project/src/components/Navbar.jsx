import React, {useState} from 'react'

const Navbar = ({appdata,logo}) => {
   // const[data,setData]=useState("hello")
    const[numberstate,setNumberstate]=useState(0)
    const[stringstate,setStringstate]=useState("a")
    const[arraystate,setArraystate]=useState(["a",true,1234])

    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)


  return (
    <div>
        {appdata.appname} {logo}

    </div>
  )
}

export default Navbar