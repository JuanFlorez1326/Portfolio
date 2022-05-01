import './Contact.css'
import React from "react"

export const Contact = () => {
    return (
        <main>
            <h1>Contact</h1>
            <div className='divContact'>
                <div className='personalContact'>
                    <p>Phone: +57 313 706 6248</p>
                    <p>Email: juanks339@gmail.com</p>
                </div>
                <div>
                    <div className='divFormContact'>
                        <form>
                            <label htmlFor="name">His Name Is:</label><br/>
                            <input type="text"/><br/>

                            <label htmlFor="name">Message:</label><br/>
                            <input type="text"/><br/>

                            <label htmlFor="name">Your Email Is:</label><br/>
                            <input type="text"/><br/>

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}