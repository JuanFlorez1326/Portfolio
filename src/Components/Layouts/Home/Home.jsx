import './Home.css'
import React from "react"
import logoPage from '../../../Images/logo.png'
import { SiCsharp, SiPython, SiJavascript, SiKotlin, SiJira, SiNodedotjs, SiMicrosoftoffice,
SiFlask, SiReact, SiMongodb, SiGithub, SiHtml5, SiCss3, SiNpm, SiGitlab, SiLinux } from 'react-icons/si'

import { DiDotnet, DiGit} from 'react-icons/di'
import { GrMysql } from 'react-icons/gr'
import { BsFillTerminalFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const Home = () => {
    return (
        <main className='classMain'>
            <div className='divInfoHome'>
                <div className='divInfoH'>
                    <h1>Hi,</h1>
                    <h2>I'm Juan Florez</h2>
                    <h3>Junior Software Developer</h3>
                    <NavLink to='/contact'><button className='btnContactHome'>Contact</button></NavLink>
                </div>
                <div className='divImageHome'>
                    <img className='classImageHome' src={logoPage} alt='Home' />
                </div>
            </div>
            <div className='divInfoSkills'>
                <h2 className='classTitleSkills'>Tools And Skills</h2>
                <h3 className='classSubtitleSkills'>Basic Level In:</h3>
                <div className='divSkillsItems'>
                   <div className='divSkills'>
                        <div>
                            <p className='itemTitleSkill'>C#</p>
                            <p className='itemIconSkill'><SiCsharp/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Python</p>
                            <p className='itemIconSkill'><SiPython/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>JavaScript</p>
                            <p className='itemIconSkill'><SiJavascript/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Kotlin</p>
                            <p className='itemIconSkill'><SiKotlin/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>.Net</p>
                            <p className='itemIconSkill'><DiDotnet/></p>
                        </div>
                        <div>
                            <p>Flask</p>
                            <p className='itemIconSkill'><SiFlask/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>React</p>
                            <p className='itemIconSkill'><SiReact/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>MySQL</p>
                            <p className='itemIconSkill'><GrMysql/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>MongoDB</p>
                            <p className='itemIconSkill'><SiMongodb/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Git</p>
                            <p className='itemIconSkill'><DiGit/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>GitHub</p>
                            <p className='itemIconSkill'><SiGithub/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>GitLab</p>
                            <p className='itemIconSkill'><SiGitlab/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Jira Software</p>
                            <p className='itemIconSkill'><SiJira/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>HTML5</p>
                            <p className='itemIconSkill'><SiHtml5/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>CSS3</p>
                            <p className='itemIconSkill'><SiCss3/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Node.js</p>
                            <p className='itemIconSkill'><SiNodedotjs/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>NPM</p>
                            <p className='itemIconSkill'><SiNpm/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Terminal</p>
                            <p className='itemIconSkill'><BsFillTerminalFill/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Office</p>
                            <p className='itemIconSkill'><SiMicrosoftoffice/></p>
                        </div>
                        <div>
                            <p className='itemTitleSkill'>Linux</p>
                            <p className='itemIconSkill'><SiLinux/></p>
                        </div>
                   </div>
                </div>
            </div>
        </main>
    )
}