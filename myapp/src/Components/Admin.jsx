import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
function Admin() {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.setItem("admin",'false')
        alert("Logout completed")
        navigate('/login')
    }
    const movetoaddproduct = ()=>{
      navigate('/addproduct')
    }
  return (
    <div>Admin


        <button onClick={logout}>Logout</button>
        <button onClick={movetoaddproduct} >AddProduct</button>
        <Link to='/adminviewproduct'>View Products</Link>
    </div>
  )
}

export default Admin