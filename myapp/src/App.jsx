import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'
import Admin from './Components/Admin'
import AddProduct from './Components/AddProduct'  
import AdminRoute from './Components/AdminRoute'
import AdminViewProduct from './Components/AdminViewProduct'
import UserProducts from './Components/UserProducts'
function App() {
  return (
    <div>
<Navbar/>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/admin' element={
        <AdminRoute>
          <Admin/>
        </AdminRoute>
      }/>
      <Route path='/addproduct' element={<AdminRoute>
          <AddProduct/>
        </AdminRoute>}/>

         <Route path='/adminviewproduct' element={<AdminRoute>
          <AdminViewProduct/>
          
        </AdminRoute>}/>
        <Route path='/allproducts' element= {<UserProducts/>}/>
    </Routes>

    </div>
  )
}

export default App