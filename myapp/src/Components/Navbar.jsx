import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/allproducts'>All Products</Link>
        </nav>

    </div>
  )
}

export default Navbar