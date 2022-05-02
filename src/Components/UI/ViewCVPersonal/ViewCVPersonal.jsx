import './ViewCVPersonal.css'
import React from "react"
import cvpersonal from '../../../CV/CVPersonal.pdf'

export const ViewCVPersonal = () => {

    const ViewPhoneCV1 = () => {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('cvPersonal').click()
            window.close();
        }
    }
    ViewPhoneCV1()

    return (
        <div className='divViewCVPersonal'>
            <object className='classObjectCV1' data={cvpersonal} type='application/pdf'>
                <a href={cvpersonal} id='cvPersonal' download='CV - Juan Florez'>Click To Download</a>
            </object>
        </div>
    )
}