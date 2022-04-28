import './Header.css'
import React from "react"
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='classHeader'>
            <div className='divHeader'>
                <div className='divTitleHeader'>
                    <NavLink to='/' className='classTitleHeader'><h2 className='classTitleHeader'>Juan Florez</h2></NavLink>
                </div>
                <nav className='divNavHeader'>
                    <div className='classNav'>
                        <NavLink to='/'><a href="/" >Home</a></NavLink>
                        <NavLink to='/about'><a href="/about" >About</a></NavLink>
                        <NavLink to='/contact'><a href="/contact" >Contact</a></NavLink>
                        <NavLink to='/portfolio'><a href="/portfolio" >Portfolio</a></NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}