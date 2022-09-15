import React from 'react'
import { Link } from 'react-router-dom'
import './style2.css'


const Home = () => {
  return<>
   <h1 className='main-heading'> Welcome in the Game</h1>
   <div className='Instruction-box'>
    <div className='center'>
    <h2>
        Read The Instruction Before Start
    </h2>
   
    </div>
    <h3>About The Game</h3> 
   <ul>
 <li>This Game is for your vocabulary Test</li>
 <li>You Have to find the Exact word</li>
 <li>You Will Have given Four Choices To find The Exact Word</li>
   </ul>

<h3>Important Point</h3>
<ul>
<li>Type Any five letters First and PRESS ENTER</li>
<li>Orange Color means That letter is Present in Original Word But At Wrong Place</li>
<li>green color means ,letter is at right position</li>
<li>red color means, letter is not present in original word</li>
</ul>

<div className='center'> <Link to="/Main"> <button>Ok</button> </Link></div>
   </div>
  
 
  </>
}

export default Home