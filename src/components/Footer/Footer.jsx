import React from 'react'
import './Footer.css'
import gitHub from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  const today = new Date();
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={gitHub} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedIn} alt="" />
            </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
            <p>
              Copyright &copy; {today.getFullYear()}
            </p>
        </div>
        </div>
        
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer