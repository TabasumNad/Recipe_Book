import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateRecipe() {

    const [recipe, setRecipe]=useState({
        name:"",
        description:"",
        ingredients:"",
        imageUrl:""

    })
    const handleChange=(event)=>{
        const {name,value}=event.target
        setRecipe({...recipe,[name]:value})
    }
const navigate = useNavigate()
const handleSubmit=(event)=>{
    event.preventDefault()
    axios.post('http://localhost:4000/create-recipe',recipe)
    .then(result=>{
        navigate('/')
        console.log(result.data)
        alert("recipe created")
    }).catch(err=>console.log(err))
}


  return (

    <div className= "d-flex justify-content-center align-items-center vh-100">

    <div className='p-3 border border-1 w-90'>
       <h3>Create</h3>

       <form onSubmit={handleSubmit}>  
       <div>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='Enter name' className='from-control' name="name"
        onChange={handleChange}
    //    onChange={(e)=>setUsername(target.e.value)}
        />
       </div>

       <div>
        <label htmlFor='description'>Description</label>
        <input type='text' placeholder='Enter description' className='from-control' name="description"
         onChange={handleChange}
    //    onChange={(e)=>setUsername(target.e.value)}
        />
       </div>

       <div>
        <label htmlFor='ingredients'>Ingredients</label>
        <input type='text' placeholder='Enter ingredient' className='from-control' name="ingredient"
         onChange={handleChange}
    //    onChange={(e)=>setUsername(target.e.value)}
        />
       </div>

       <div className='mt-3'>
        <label htmlFor='imageurl'>ImageUrl</label>
        <input type='text' placeholder='Enter url' className='from-control' name="imageurl"
        
         onChange={handleChange}
    //    onChange={(e)=>setUsername(target.e.value)}
        />
       </div>
       
       <button className='mt-1 btn btn-success w-10'>
     Submit</button>

       
       </form>
         
    </div>


</div>
  )
}

export default CreateRecipe