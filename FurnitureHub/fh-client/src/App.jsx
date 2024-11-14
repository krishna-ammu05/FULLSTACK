import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import WebLayout from "./layout/WebLayout"
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element = {<WebLayout/>}>
                    <Route path ='/' element={<Home/>}/>
                </Route>
            
            </Routes>
        </BrowserRouter>
        </>
  )
}

export default App