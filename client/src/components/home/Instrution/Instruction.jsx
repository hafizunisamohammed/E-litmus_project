import React from 'react'
import {  Link } from "react-router-dom";
import './instruction.css'
function Instruction() {
  return (
    <div className='Instructions'>
      <div className='instructions-header'>
        <h1>Instructions</h1>
      </div>
        <div className='instructions-text-para'>
        <p>Welcome to the best virtual escape room, where one incorrect response could spell your doom. Your soft skills will be put to the test by this puzzle. Accept this challenge and show your peers that you are the best.</p>
          <h4>Rules and Conditions</h4>
          <ul>
            <li>There are four stages to this puzzle, and each stage assesses a different soft skill.</li>
            <li>You are advised to keep in mind that this is a timed assessment.</li>
            <li>You will be given 4 hints for the entire puzzle game. Choose the hints wisely since your selection of hints will also be kept track of</li>
            <li>For the entire puzzle, you will receive a total of 4 hints. Some stages might not even provide hints. Only use the hints if necessary because they are also being recorded.</li>
            <li>Memory-based puzzle game Stage 1 is based on a vintage flip-the-tile test. The board has nine tiles, each with four identical object pairs. Your objective is to locate every pair of tiles in the shortest amount of time.</li>
            <li>Your ability to make decisions will be evaluated in Stage 2, a situation-based game. After watching a video clip, you will be presented with a scenario and asked to respond in accordance with it.</li>
            <li>Your ability to solve problems and use critical thinking will be assessed in Stage 3, which is a jigsaw puzzle. You can advance to stage 4 only if you pass this stage.</li>
            <li>Your ability to respond to a crisis will be tested in Stage 4, the final stage. You must respond appropriately to the scenario that is presented to you.</li>
            <li>You will receive a certain number of points based on how well you performed in each stage when you pass consecutive ones.</li>
            <li>The factors used to judge you will be how well you managed your time and how well you did in the previous phases.</li>

          
          </ul>
        </div>
      
      <div className='insturction-links'>
          <div className='instruction-links-btn'>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/">Proceed</Link>
              </li>
            </ul>
         
          
          
          </div>
            
          
    </div>
    </div>
  )
}

export default Instruction