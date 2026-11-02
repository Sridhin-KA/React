import React from 'react'
import { useState } from 'react'
function Register() {

    const [name,setName]= useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState('')
    const demo = {
        name : "demo",
        email : "demo@gmail.com"
    }
    console.log(demo.email);
    
    const adduser = (e)=>{
        e.preventDefault()
       
        if (name === "" || email === "" || password === "") {
            setMessage("Please fill all the fields")
            return
        }
        const user = {
            Name : name,
            Email : email,
            Password : password
        }
        const oldUser = JSON.parse(localStorage.getItem('User')) || []
        console.log(oldUser.Email)

        const exists = oldUser.find((u)=>u.Email === email)
        if (exists){
            alert("User already exists")
            setEmail("")
            return
            }

        const updated_user = [...oldUser,user]

        localStorage.setItem("User",JSON.stringify(updated_user))
        setName("")
        setEmail("")
        setPassword("")
        alert("User saved")

    }

  return (
    <div>

        <h1>Create Acoount</h1>

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        <br /><br />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
        <br /><br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <br /><br />
        <span style={{ color: 'red' }}>{message}</span>
        <button type='submit' onClick={adduser} >Create Account</button>


    </div>
  )
}

export default Register