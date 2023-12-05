import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mydymbj', 'template_qly64vr', form.current, '0vl5ZQPG3ewbsO-DW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us ?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter your email id'/>
            <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join