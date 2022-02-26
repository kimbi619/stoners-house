import React from 'react'

import Map from './Map'
import './Contact.css'
import Socials from '../../Socials'

const Contact = () => {
    const handleFormAction = () => {
        console.log('submitted')
    }
  return (
    <div className='contactPage'>
        <div className="container">
            <div className="contactMapGrid">
                <div className="getInTouch">
                    <h1 className="titleText">get in touch with us</h1>
                    <span className="desc">Fill out the form below to send us a confidential message</span>

                    <form className='contactform' onSubmit={handleFormAction}>
                        <input className='contactFormField' type="text" name="name" placeholder='Name*' />
                        <input className='contactFormField' type="email" name="email" placeholder='Email*' />
                        <input className='contactFormField' type="website" name="website" placeholder='website' />
                        <textarea className='contactFormField' name="message" cols="30" rows="10" placeholder='Message'></textarea>
                        <input className='messageSubmit contactFormField' type="submit" value="Send message" />
                    </form>
                </div>
                <div className="maps">
                    <span className="desc">Find us on maps</span>
                    {/* <Map /> */}
                </div>
            </div>
            <h1 className="titleText">Our central offices</h1>
            <div className="addresses">
                <div className="location1">
                    <h1 className="titleText">USA</h1>
                    <address>Address :  1923 Bexley Lane, Chesapeake Virginia 23322, US.</address>
                    <address>Phone : +1-757-762-0455</address>
                    <address>Email: <a href="stylesheet" href="mailto: stonershouseus@gmail.com" />stonershouseofficial@gmail.com</address>
                </div>

                <div className="location1">
                    <h1 className="titleText">Canada</h1>
                    <address>Address :  1923 Bexley Lane, Chesapeake Virginia 23322, US.</address>
                    <address>Phone : +1-757-762-0455</address>
                    <address>Email: <a href="stylesheet" href="mailto: stonershousecanada@gmail.com" />stonershouseofficial@gmail.com</address>
                </div>
            </div>
            <div className="rapidContactText">Please you can alway contact us at <a href="mailto:stonershouseofficial@gmail.com"> stonershouseofficial@gmail.com</a></div>
            <div className="socialLinks">
                <Socials />
            </div>
        </div>
    </div>
  )
}

export default Contact