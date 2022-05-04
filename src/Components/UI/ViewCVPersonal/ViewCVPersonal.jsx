import './ViewCVPersonal.css'
import React from "react"
import Swal from 'sweetalert2'
import cvpersonal from '../../../CV/CVPersonal.pdf'

export const ViewCVPersonal = () => {

    const ViewPhoneCV1 = () => {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('cvPersonal')
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Resume Successfully Downloaded',
            })
        }
    }

    return (
        <div className='divViewCVPersonal'>
            <object className='classObjectCV1' data={cvpersonal} type='application/pdf'>
                <div className='divViewCVPhone'>
                    <h2>Personal Curriculum Vitae</h2>
                    <button onClick={() => ViewPhoneCV1()}><a href={cvpersonal} id='cvPersonal' download='CVPersonal - Juan Florez'>Click To Download</a></button>
                </div>
            </object>
        </div>
    )
}