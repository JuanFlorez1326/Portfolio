import './ViewCVSena.css'
import React from "react"
import cvsena from '../../../CV/CVSena.pdf'

export const ViewCVSena = () => {

    const ViewPhoneCV2 = () => {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('cvSena').click()
            window.close();
        }
    }
    ViewPhoneCV2()

    return (
        <div className='divViewCVSena'>
            <object className='classObjectCV2' data={cvsena} type='application/pdf'>
                <a href={cvsena} id='cvSena' download='CV - Juan Florez'>Click To Download</a>
            </object>
        </div>
    )
}