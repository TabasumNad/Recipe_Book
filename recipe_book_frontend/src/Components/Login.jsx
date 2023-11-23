import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')


axios.defaults.withCredential = true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/auth/login", {username, password})
        .then(result=>(
            console.log(result)
        )).catch(err=>console.log(err))
        }
    

  return (
    <div className= "d-flex justify-content-center align-items-center vh-100">

        <div className='p-3 border border-1 w-90'>
           <h3>Login</h3>
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
           <button className='mt-1 btn btn-success w-10'>Login</button>

           <Link to='/auth/register'><button className='mt-1 btn btn-success w-10'>Register</button></Link>
           {/* <button className='mt-1 btn btn-success w-10'>Login</button> */}
           
           </form>
             
        </div>


    </div>
  )
}

export default Login