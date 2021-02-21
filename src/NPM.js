import React from 'react'
import './css/BlogpostStyles.css'
import typeScriptImage from './images/typescript.PNG'



function npm() {
    return (

     <div class="main-1" id="npm">
       <div className="EmptyTop"></div>
    <h1>NPM</h1>
     <p><figure className="tsImage"> <img src={typeScriptImage} alt="TypeScript"></img></figure>
     What is NPM?
What benefits does NPM provide?
      </p>
      <p>
      What is a NPM module?
What are the 3 components of NPM?

        </p>
        <p>
        Why Are they important?   
     </p>
     </div>
    );
  }
  
  export default npm;
  