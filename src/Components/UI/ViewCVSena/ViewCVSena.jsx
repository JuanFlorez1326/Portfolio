import './ViewCVSena.css'
import React from "react"
import Swal from 'sweetalert2'
import cvsena from '../../../CV/CVSena.pdf'

export const ViewCVSena = () => {

    const ViewPhoneCV2 = () => {
        if(typeof window.orientation !== "undefined"){
            document.getElementById('cvSena')
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Resume Successfully Downloaded',
            })
        }
    }

    return (
        <div className='divViewCVSena'>
            <object className='classObjectCV2' data={cvsena} type='application/pdf'>
                <div>
                    <h2>Curriculum Vitae Sena</h2>
                    <button onClick={() => ViewPhoneCV2()}><a href={cvsena} id='cvSena' download='CVSena - Juan Florez'>Click To Download</a></button>
                </div>
            </object>
        </div>
    )
}