import React from 'react'
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
import { ViewCVPersonal } from './Components/UI/ViewCVPersonal/ViewCVPersonal.jsx'
import { ViewCVSena } from './Components/UI/ViewCVSena/ViewCVSena'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element = { <Home/> }/>
        <Route exact path='/about' element = { <About/> }/>
        <Route exact path='/contact' element = { <Contact/> }/>
        <Route exact path='/portfolio' element = { <Portfolio/> }/>
        <Route exact path='/cv1' element = { <ViewCVPersonal/> }/>
        <Route exact path='/cv2' element = { <ViewCVSena/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App