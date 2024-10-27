import React, {useState,useEffect} from 'react'

const Navbar = ({appdata,logo}) => {
   // const[data,setData]=useState("hello")
    const[numberstate,setNumberstate]=useState(0)
    const[stringstate,setStringstate]=useState("a")
    const[arraystate,setArraystate]=useState(["a",true,1234])

    // console.log(numberstate)
    // console.log(stringstate)
    // console.log(arraystate)

    const[count,setCount]=useState(10)

    useEffect(()=>{
      //alert('effect rendered')
      console.log('Count is ' + count)

    },[count])
  return (
    <>
       {/* {appdata.appname} {logo}//obj with data */}
        <button className='w-[6rem] h-[4rem] bg-blue-500 text-blue-200' 
        onClick={()=> { setCount(count-1)}}>
          Count{count}
        </button>
    </>
  )
}

export default Navbar