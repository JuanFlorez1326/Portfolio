import './About.css'
import React from "react"
import aboutme from '../../../Images/about.png'
import { NavLink } from 'react-router-dom'

export const About = () => {
    return (
        <main className='classMainAboutMe'>
            <h1 className='classTitleAboutMe'>About Me</h1>

            <div className='divInfoAboutMe'>
                <div className='divInfoMe'>
                    <p>I am a junior programmer<br/> from Armenia - Quindio - Colombia.<br/>
                    With motivation to continue perfecting<br/> my skills and grow professionally.</p>
                    <div>
                        <NavLink to='/cv1'><button className='btnCVAbout btnCV1About'>View CV - Personal</button></NavLink>
                        <NavLink to='/cv2'><button className='btnCVAbout'>View CV - SENA</button></NavLink>    
                    </div>
                </div>

                <div className='divImageAboutMe'>
                    <img className='classImageAboutMe' src={aboutme} alt="About Me" />
                </div>
            </div>
        </main>
    )
}