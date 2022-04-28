import React from 'react'
import './App.css'
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Header } from './Components/Layouts/Header/Header'
import { Home } from './Components/Layouts/Home/Home'
import { About } from './Components/Layouts/About/About'
import { Contact } from './Components/Layouts/Contact/Contact'
import { Portfolio } from './Components/Layouts/Portfolio/Portfolio'
import { Footer } from './Components/Layouts/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element = { <Home/> }/>
        <Route exact path='/about' element = { <About/> }/>
        <Route exact path='contact' element = { <Contact/> }/>
        <Route exact path='portfolio' element = { <Portfolio/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App