import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from './pages/Products'
import WebLayout from "./layout/WebLayout"
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element = {<WebLayout/>}>
                    <Route path ='/' element={<Home/>}/>
                    <Route path ='/products' element={<Products/>}/>
                </Route>
            
            </Routes>
        </BrowserRouter>
        </>
  )
}

export default App