import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminSettings from './pages/Admin/AdminSettings'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import WebLayout from './layout/WebLayout'
import TwClasses from './pages/TwClasses'
import AdminOrders from './pages/Admin/AdminOrders'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/Twclasses' element={<TwClasses />} />
                        
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/products' element={<AdminProducts/>} />
                        <Route path='/admin/users' element={<AdminUsers/>} />
                        <Route path='/admin/settings' element={<AdminSettings/>} />
                        <Route path='/admin/orders' element={<AdminOrders/>} />
                        
                        {/* <Route path='/admin/dashboardhomecard' element={<AdminDashboardHomeards/>} /> */}

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App