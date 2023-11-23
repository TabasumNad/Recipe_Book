import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
   <div> 
   <div> 
   <nav class=" adjust navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/create-recipe">Create</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/save-recipe">Save</Link>
        </li>
        
        <button class="reglog btn btn-outline-success" type="submit">
            <Link to="/register" >Register/Login</Link></button>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
  )
}

export default Nav