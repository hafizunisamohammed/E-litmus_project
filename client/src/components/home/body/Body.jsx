import React from 'react'
import './Body.css'


function Body() {
  return (
    <div className='body'>
      <div className='body-text' >
          <h1>Puzzle</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='btn body-btn'>
            <a href="#">Play Now!</a>
      </div>
    </div>
  )
}

export default Body