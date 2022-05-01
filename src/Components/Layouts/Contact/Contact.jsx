import './Contact.css'
import React from "react"
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import contactme from '../../../Images/contact.png'

export const Contact = () => {

    const SendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_h5mkknq','template_cxu0vbs',e.target,'P6kspBKbsOAr4yOuz')
        .then(response => {
            console.log(response)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The Mail Was Sent Correctly',
                showConfirmButton: false,
                timer: 1500
              })
            })
        .catch(error => { 
            console.log(error)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'The Mail Could Not Be Sent',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    return (
        <main className='divMainContact'>
           <div className='divMainContact'>
                <h1 className='classTitleContact'>Contact</h1>
                <div className='divContact'>
                    <div className='personalContact'>
                        <h2 className='classTitlePersonalContact'>Contact Means</h2>
                        <p>Email: juanks339@gmail.com</p>
                        <p className='classPhoneContact'>Phone: +57 313 706 6248</p>
                        <div className='divImageContactMe'>
                            <img className='classImageContactMe' src={contactme} alt='Contact Me' />
                        </div>
                    </div>
                    <div className='divForm'>
                        <div className='divFormContact'>
                            <form className='classFormContact' onSubmit={ SendEmail }>
                                <h2 className='classTitleFormContact'>Contact Form</h2>

                                <p>His Name Is:</p>
                                <input type="text" name='userName' className='fistInput'/>

                                <p>Message:</p>
                                <textarea name="userMessage" cols="30" rows="10" className='firstTextArea'></textarea>

                                <p>Your Email Is:</p>
                                <input type="email" name='userEmail'/><br/>

                                <button className='btnSendFormContact'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </main>
    )
}