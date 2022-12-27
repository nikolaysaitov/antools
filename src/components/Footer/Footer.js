import './Footer.css'
import Logo from "../../images/Logo.png";
import React from 'react'

export default function Footer() {
  return (
  <>
    <div className='footer__border'></div>
    
    <footer className="footer container">
        <div className="footer__about">
            <div className='footer__logo'><a href="##" >
          <img src={Logo} alt="logo" />
        </a></div>
            <div className='footer__title'><h3>Copyright 2021. Antools</h3></div>
            <div className='footer__info'><p>Antool is a web collection of information on paid or free Design and Development tools</p></div>
        </div>

        <div className='footer__items'>
            <div footer__item>
                <div className='footer__title'><h3>Contact Us</h3></div>
                <div className='footer__links'>
                <a href="#" className="footer__link">+621987463</a>
                <a href="#" className="footer__link">M Building, No.10 A</a>
                <a href="#" className="footer__link">antools@awesome.com</a>
                </div>
            </div>

            <div footer__item>
                <div className='footer__title'><h3>Categories</h3></div>
                <div className='footer__links'>
                <a href="#" className="footer__link">Design</a>
                <a href="#" className="footer__link">Development</a>
             
                </div>
            </div>

            <div footer__item>
                <div className='footer__title'><h3>Company Info</h3></div>
                <div className='footer__links'>
                <a href="#" className="footer__link">About Us</a>
                <a href="#" className="footer__link">Our Partners</a>
                <a href="#" className="footer__link">Blog</a>
                </div>
            </div>
        </div>
        
    </footer></>
  )
}
