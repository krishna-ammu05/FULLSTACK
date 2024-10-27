//import React from 'react'

import Navbar from "./components/Navbar"

const App = () => {
    const data={ //obj
        appname:"hello Welocome to FSD"//prop
    }
    const logdata="mylogo"//string
    const test="HELLO WORLD"
  return (
    <>
        <p className="text-purple-900">{test}</p>
        <Navbar appdata={data} logo={logdata}/>
        { /* passing like arug */ }
    </>
  )
}

export default App