import './Home.css'
import React from "react"
import logoPage from '../../../Images/logo.png'
import { SiCsharp, SiPython, SiJavascript, SiKotlin, SiJira, SiNodedotjs, SiMicrosoftoffice,
SiFlask, SiReact, SiMongodb, SiGithub, SiHtml5, SiCss3, SiNpm, SiGitlab } from 'react-icons/si'

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
                <div className='divSkills'>
                    <div>
                        <p>C#</p>
                        <h1><SiCsharp/></h1>
                    </div>
                    <div>
                        <p>Python</p>
                        <h1><SiPython/></h1>
                    </div>
                    <div>
                        <p>JavaScript</p>
                        <h1><SiJavascript/></h1>
                    </div>
                    <div>
                        <p>Kotlin</p>
                        <h1><SiKotlin/></h1>
                    </div>

                    <div>
                        <p>.Net</p>
                        <h1><DiDotnet/></h1>
                    </div>
                    <div>
                        <p>Flask</p>
                        <h1><SiFlask/></h1>
                    </div>
                    <div>
                        <p>React</p>
                        <h1><SiReact/></h1>
                    </div>
                    <div>
                        <p>MySQL</p>
                        <h1><GrMysql/></h1>
                    </div>
                    <div>
                        <p>MongoDB</p>
                        <h1><SiMongodb/></h1>
                    </div>
                    <div>
                        <p>Git</p>
                        <h1><DiGit/></h1>
                    </div>
                    <div>
                        <p>GitHub</p>
                        <h1><SiGithub/></h1>
                    </div>
                    <div>
                        <p>GitLab</p>
                        <h1><SiGitlab/></h1>
                    </div>
                    <div>
                        <p>Jira Software</p>
                        <h1><SiJira/></h1>
                    </div>
                    <div>
                        <p>HTML5</p>
                        <h1><SiHtml5/></h1>
                    </div>
                    <div>
                        <p>CSS3</p>
                        <h1><SiCss3/></h1>
                    </div>
                    <div>
                        <p>Node.js</p>
                        <h1><SiNodedotjs/></h1>
                    </div>
                    <div>
                        <p>NPM</p>
                        <h1><SiNpm/></h1>
                    </div>
                    <div>
                        <p>Terminal</p>
                        <h1><BsFillTerminalFill/></h1>
                    </div>
                    <div>
                        <p>Office</p>
                        <h1><SiMicrosoftoffice/></h1>
                    </div>
                </div>
            </div>
        </main>
    )
}