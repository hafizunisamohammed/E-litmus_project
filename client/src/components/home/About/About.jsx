import React from 'react'
import {BsGithub} from 'react-icons/bs' 
import {BsLinkedin} from 'react-icons/bs'

function About() {
  return (
    <div className='about'>
      <div className='about-header'>
        <div className='logo'>
          <img src="" alt="" />
        </div>
        <div className='login-sign-in'></div>
      </div>
      <div className='about-text'></div>
      <div className='about-footer'>
      <a href="#"><BsGithub size={'2em'} /></a>
            <a href="#"> <BsLinkedin size={'2em'} />  </a>
      </div>
    </div>
  )
}

export default About