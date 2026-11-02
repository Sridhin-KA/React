import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState('')
  const adminemail = 'admin@gmail.com'
  const adminpass = '1234'
  const handlesubmit = (e)=>{
    e.preventDefault()

    const all_user = JSON.parse(localStorage.getItem("User")) || []
    if (email ===adminemail && password === adminpass){
        localStorage.setItem("admin","true")
        navigate('/admin')

    }else{
      const user = all_user.find((item)=>item.Email === email && item.Password ===password)
      console.log(user);
      
    if (user){
      localStorage.setItem('loggedUser',JSON.stringify(user))
      alert("Login Successful")
      navigate('/home')
    }
    else{
      alert("Invalid Credentials")
    } 
    }
    
  }
  return (
    <div>

      <h1>Login Page</h1>
      <form onSubmit={handlesubmit}>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <br /><br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <br /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login