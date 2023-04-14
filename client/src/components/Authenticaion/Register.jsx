import React, {useState} from 'react'
import logo from '../home/header/logo3.jpg'
import './Register.css'
import axios from "axios"

import {Link} from 'react-router-dom'
function Register() {


    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3000/deliver", user)
            .then(res=>console.log(res))
        } else {
            alert("invlid input")
        }
        
    }
  return (
    <div className='register'>
    <div className="register-logo">
        <img src={logo} alt="logo" />
        <h1>Puzzle</h1>
    </div>
    <div className='register-container'>
        
            <div className="register-header">
                <h4>Hello There!</h4>
                <span className='register-header-upper-text'>
                    Lets Get you registered for the fun Puzzle!
                </span>
            </div>
            <div className="input-details">
            <div className="textbox">
            <input  type="text" name='name' value={user.name} placeholder='Name'  onChange={handleChange}  />
                   
                    <input  type="text" name='email' value={user.email} placeholder='Your-email' onChange={handleChange} />
                    <input type='password' name='password' value={user.password} placeholder='Password'  onChange={handleChange} />
                    <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter Password'  onChange={handleChange} />
                    <button type='submit' onClick={register}  className='button-19'>Register</button>
            </div>
                <div className="not-a-memeber-register">
                    <span className='not-a-member-text-register'>Already a Member!<Link to='../Username' style={{color:'#FFA7A7'}}> Log In!</Link> </span>
                </div>
            </div>
            
        
    </div>
</div>
  )
}

export default Register