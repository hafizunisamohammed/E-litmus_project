import React from 'react'
import './Footer.css'
import {BsGithub} from 'react-icons/bs' 
import {BsLinkedin} from 'react-icons/bs'
function Footer() {
  return (
    <div className='footer'>
            <a href="#"><BsGithub size={'2em'} /></a>
            <a href="#"> <BsLinkedin size={'2em'} />  </a>
        
    </div>
  )
}

export default Footer