import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import LishProduct from './pages/LishProduct'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Description from './pages/Description'
import { useEffect } from 'react'
import PrivateRouter from './pages/private/PrivateRouter'
import HomeAdmin from './pages/private/HomeAdmin'
import ManagerProduct from './pages/private/ManagerProduct'
import ManagerUser from './pages/private/ManagerUser'

function App() {
  //  chuyen trang no co dung ve doan mk click
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <Routes>
        {/* router ai cung co the truy cap */}




        <Route path='/' element={<Home />} />
        <Route path='/lish_product' element={<LishProduct />} />
        <Route path='/product/:id' element={<Description />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />


        {/* router chi admin moi co the truy cap */}
        <Route path='/admin' element={<PrivateRouter />}>
          <Route index element={<HomeAdmin />} />
          <Route path='/manager-product' element={<ManagerProduct />} />
          <Route path='/manager-user' element={<ManagerUser />} />
        </Route>
      </Routes> 
    </>
  )
}

export default App
