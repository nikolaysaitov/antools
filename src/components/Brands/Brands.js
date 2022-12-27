import './Brands.css'
import Microsoft from "../../images/microsoft.png"
import Google from "../../images/google.png"
import Slack from "../../images/slack2.png"
import Wordpress from "../../images/wordpress.png"


import React from 'react'

export default function Brands() {
  return (
    <div className='brands container' >
        <div className='brands__blur'></div>
        <div className='brands__title'><h3>Trusted more than 150+ brand</h3></div>
        <div className='brands__icons'>
            <div className='brands__icon' >
                <img src={Microsoft} alt="Microsoft"/>
            </div>
            <div className='brands__icon' >
                <img src={Google} alt="Google"/>
            </div>
            <div className='brands__icon' >
                <img src={Slack} alt="Slack"/>
            </div>
            <div className='brands__icon' >
                <img src={Wordpress} alt="Wordpress"/>
            </div>
            
        </div>
    </div>
  )
}
