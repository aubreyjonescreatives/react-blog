import React from 'react'
import './css/BlogpostStyles.css'
import GitImage from './images/gitimage.PNG'



function UnitTesting() {
    return (
     
     <div class="main-1" id="unittesting">
    <h1>UNIT TESTING</h1>
     <p><figure className="gitImage"> <img src={GitImage} alt="Unit Testing"></img></figure>
     What is a unit? Think about all of the letters and numbers combined together to create a 
     programming language. A unit is the smallest isolated logical piece of code. For example, it could be 
     a variable i for an integer inside a for loop. So what is unit testing? I find it easy to understand unit testing by taking units of code and testing their 
     use of that code to see if it works. We can test a unit as simple as a single variable integer or several 
     snippets of code at a time.   

    
      </p>
      <p>
    What is test driven development? 


        </p>
        <p>
     Why would you practice test driven development? 

     What are the advantages and disadvantages of test driven development? 

     </p>
     </div>
    );
  }
  
  export default UnitTesting;
  