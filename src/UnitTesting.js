import React from 'react'
import './css/BlogpostStyles.css'
import unitTesting from './images/unittesting.PNG'



function UnitTesting() {
    return (
     
     <div class="main-1" id="unittesting">
    <h1>UNIT TESTING</h1>
     <p><figure className="unitImage"> <img src={unitTesting} alt="Unit Testing"></img></figure>
     What is a unit? Think about all of the letters and numbers combined together to create a 
     programming language. Each individual letter and number is a unit. You got it. A unit is the smallest 
     isolated logical piece of code. For example, it could be a variable i for an integer inside a for loop. 
     So what is unit testing? I find it easy to understand unit testing by taking units of code and testing their 
     use of that code to see if it works. We can test a unit as simple as a single variable integer or several 
     snippets of code at a time. Units and unit testing are the foundation of web development as they let us know if our 
     code works.  

    
      </p>
      <p>
    What is test driven development? Test driven development, or TDD for short, enables programmers to process unit testing 
    before production. So why would we practice test driven development? We want to know if our code works before our users 
    try it out. It would be a terrible experience to receive a 404 page not found response when a potential customer opens a page. 
    TDD can help us avoid this situation. We want to test our programs first before we send them off for public use to the 
    world wide web. TDD can help us do this as we test our code snippets throughout our development. 


        </p>
        <p>
     What are the advantages and disadvantages of test driven development? I would say the advantage of a test driven development is quite 
     obvious. It is the editing part of the process before you send off finished work. No one wants a faulty website or app. Everyone needs to 
     read their instant messages before they send them off to the receiver. It is the same with a test driven development. This will allow us as 
     programmers to double check our work for typos and misinformation. So are there any disadavantages? I would say the main disadvantage is that 
     it might not always work out. A developer could test code for hours, and then eventually waste time with unresolved code. It might be challenging 
     to communicate why a snippet of code isn't working. A test driven development process can also extend deadlines, much to our dismay. 

     </p>
     </div>
    );
  }
  
  export default UnitTesting;
  