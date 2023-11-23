import { useState } from 'react'
import './App.css'
import Registration from './Components/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUP'
import Log from './Components/Log'
import Home from './Components/Home'
import Nav from './Components/Nav'
import SaveRecipe from './Components/SaveRecipe'
import CreateRecipe from './Components/CreateRecipe'
import RecipeBook from './Components/RecipeBook'
import RecipeForm from './Components/RecipeForm'
import RecipeList from './Components/RecipeList'

function App() {
  

  return (
    <BrowserRouter>
    {/* <Nav/> */}
   <Routes>
    <Route path ='/' element = {<SignUp/>}></Route>
    <Route path ='/login' element = {<Log/>}></Route>
    <Route path ='/create-recipe' element={<RecipeBook/>}></Route>
    <Route path ='/home' element = { <Home/>}></Route> 
    {/* <Route path ='/save-recipe' element = { <RecipeList recipes={recipes}}></Route>  */}
    {/* <Route path ='/create-recipe' element = { <RecipeBook/>}></Route>  */}
   </Routes>
    
   </BrowserRouter>
  )
}

export default App
