import { Navigate } from "react-router-dom";

function AdminRoute({children}){
    const admin = localStorage.getItem('admin')

    return admin === 'true' ? children : <Navigate to='/login'/>


}

export default AdminRoute