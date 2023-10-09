import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
// import {RiMessengerLine} from 'react-icons/ri'
// import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_er4k34u', 'template_w06i47t', form.current, '4zrJHBr8dIM4RD6Wq')
        e.target.reset()
      };
    
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>
        <div className="container contact__container">
            {/* contact options */}
            <div className="contact__options">
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>sonikum2816@gmail.com</h5>
                    <a href="mailto:sonikum2816@gmail.com" target="blank">Send a message</a>
                </article>
                {/* <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messanger</h4>
                    <h5>Deepak Kumar</h5>
                    <a href="https://www.facebook.com/deepak545608" target="blank">Send a message</a>
                </article> */}
                {/* <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+91-  </h5>
                    <a href="https://api.whatsapp.com/send?phone=91" target="blank">Send a message</a>
                </article> */}
            </div>

            {/* form action */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Enter Your Full Name' required />
                <input type="email" name="email" placeholder='Enter EmailID'required />
                <textarea name="message" id="mssg" rows="7" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>


            </form>

        </div>
    </section>
  )
}

export default Contact