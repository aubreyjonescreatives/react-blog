import React from 'react'
import './css/BlogpostStyles.css'
import Me from './images/Me.jpg'



function IntrotoBlogpost() {
    return (
     
     <div class="main-1">
    <h1>ABOUT ME</h1>
     <figure className="Me"> <img src={Me} alt="Aubrey Jones About Me"></img></figure>
     </div>
    
    );
  }
  
  export default IntrotoBlogpost;
  