import React,{useState} from 'react'
import logo from '../home/header/logo3.jpg'
import './Username.css'
import {Link} from 'react-router-dom'
function Username() {
    const [user , setUser] = useState ({
        name : "",
        password:"",
    })

    const handleChange = e => {
        
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value 
        })
    }
  return (
    
    <div className='username'>
        <div className="username-logo">
            <img src={logo} alt="logo" />
            <h1>Puzzle</h1>
        </div>
        <div className='username-container'>
            
                <div className="username-header">
                    <h4>Hello Again</h4>
                    <span className='username-header-upper-text'>
                        Go On accept the challenge!!
                    </span>
                </div>
                <div className="input-details">
                <div className="textbox">
                        <input  type="text" name='name' value={user.name} placeholder='Name'  onChange={handleChange}/>
                        <input type='password' name='password' value={user.password} placeholder='Password'  onChange={handleChange} />
                        <button type='submit'  className='button-19'>Lets Go</button>
                    </div>
                    <div className="not-a-memeber">
                        <span className='not-a-member-text'>Not a Member!<Link to='../Register' style={{color:'#FFA7A7'}}> Register Yourself</Link> </span>
                    </div>
                </div>
                
            
        </div>
    </div>
  )
}

export default Username