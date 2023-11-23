import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Registration() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/auth/register", {username, password})
        .then(result=>(
            console.log(result)
        )).catch(err=>console.log(err))
        }
    

  return (
    <div className= "d-flex justify-content-center align-items-center vh-100">

        <div className='p-3 border border-1 w-90'>
           <h3>Register</h3>
           <form onSubmit= {handleSubmit}>  
           <div>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Enter Username' className='from-control'
           onChange={(e)=>setUsername(target.e.value)} />
           </div>

           <div>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Username' className='from-control'
            onChange={(e)=>setPassword(target.e.value)}/>
           </div>
           <button className='mt-1 btn btn-success w-10'>Submit</button>

           <Link to='/auth/login'><button className='mt-1 btn btn-success w-10'>Login</button></Link>
           {/* <button className='mt-1 btn btn-success w-10'>Login</button> */}
           
           </form>
             
        </div>


    </div>
  )
}

export default Registration