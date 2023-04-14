import React from 'react'
import './Head.css'
import  logo from './logo3.jpg'
import {  Link } from "react-router-dom";
export default function Head() {
  return (
    <div className='head-main'>
        <div className='head-logo'>
            <img src={logo} alt="pohot" />
        </div>
        <div className='head-options'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instruction">Rule</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
            
        </div>
        <div className='head-login-sign-in'>
        <div className='btn'>
            <a href="#">Login</a>
            </div>
        <div className='btn'>
            <a href="#">Sign in</a>
            </div>
        </div>
    </div>
  )
}
