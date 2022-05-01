import './About.css'
import React from "react"
import aboutme from '../../../Images/about.png'

export const About = () => {
    return (
        <main className='classMainAboutMe'>
            <h1 className='classTitleAboutMe'>About Me</h1>

            <div className='divInfoAboutMe'>
                <div className='divInfoMe'>
                    <p>I am a junior programmer from Armenia - Quindio - Colombia<br/>
                    With motivation to continue perfecting my skills and grow professionally.</p>
                </div>

                <div className='divImageAboutMe'>
                    <img className='classImageAboutMe' src={aboutme} alt="About Me" />
                </div>
            </div>
        </main>
    )
}