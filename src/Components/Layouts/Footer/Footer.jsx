import './Footer.css'
import React from "react"

import {SiLinkedin, SiInstagram, SiFacebook, SiTwitter} from 'react-icons/si'

export const Footer = () => {
    return (
        <footer className='classFooter'>
            <h2>Juan Florez &copy; 2022. All Right Reserved</h2>
            <div className='divSocialNetworks'>
                <a href="https://www.linkedin.com/in/juanflorez1326/" target="_blank" rel='noopener noreferrer'><SiLinkedin className='itemSocialNetwork'/></a>
                <a href="https://www.instagram.com/juanflorez13/" target='_blank' rel='noopener noreferrer'><SiInstagram className='itemSocialNetwork'/></a>
                <a href="https://www.facebook.com/juanflorez13/" target='_blank' rel='noopener noreferrer'><SiFacebook className='itemSocialNetwork'/></a>
                <a href="https://twitter.com/JuanFlorez1326" target='_blank' rel='noopener noreferrer'><SiTwitter className='itemSocialNetwork'/></a>
            </div>
        </footer>
    )
}