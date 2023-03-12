import React from 'react'
import { useRef, useState } from 'react';
import './contact.css'

import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

import emailjs from 'emailjs-com'

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_880gtco', 'template_58dzkuj', form.current, 'TeNTAWimHfKAAwV_B')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    setIsSubmitted(true)
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yosikari@gmail.com</h5>
            <a href="mailto:yosikari@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>yossi.karasik</h5>
            <a href="https://m.me/yossi.karasik" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+972-528-666064</h5>
            {/* <a href="https://api.whatsapp.com/send?phone=+972528666064">Send a message</a> */}
            <a href="https://chatwith.io/s/yossikarasik" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {isSubmitted && <h5 className='message__sent'>Message sent <span>successfully</span></h5>}
        </form>
      </div>
    </section>)
}

export default Contact