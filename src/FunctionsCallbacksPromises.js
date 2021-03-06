import React from 'react'
import './css/BlogpostStyles.css'
import functionsImage from './images/functions.PNG'
import functionsImage2 from './images/function2.PNG'
import functionsImage3 from './images/function3.PNG'
import functionsImage4 from './images/functions4.PNG'
import callback1 from './images/callback1.PNG'
import returnImage from './images/return.PNG'





function FunctionsCallbacksPromises() {
    return (





     <div class="main-1" id="functionscallbackspromises">
       <div className="EmptyTop"></div>
    <h1>Functions, Callbacks, and Promises</h1>
     <p>
     How do you declare a function? Why is it important to declare a function? You can accomplish this in several 
      different ways. For example, parameters help declare a function as they pass individual arguments. Here is an 
      example of how to display arguments inside the parameter, which is the first set of parenthesis after an argument title:<p>
     </p>
     <p>
       <figure className="functionImage"><img src={functionsImage} alt="functions"></img></figure></p>
    <p>
     You can also declare a function as you assign it to a variable, constant, or let with an arrow, 
     which is a more up-to-date version for writing JavaScript ES6 functions such as described in this image: 
     </p>
    <p> <figure className="functionImage"><img src={functionsImage2} alt="functions"></img></figure></p>
     <p>And lastly, don't forget about declaring a function within the console.log. You can have an array of 
       objects inside a const. And then map through the cont after the array: 
     </p>
     <p> <figure className="functionImage"><img src={functionsImage3} alt="functions"></img></figure></p>
    <p>So how do you return a value from the function? Values are anything in JavaScript that has a name. 
      Values can be anywhere from global or local variables, constants, and lets to arguments. Let's take a 
      look at the following example of where to place the keyword return inside a function:</p> 
    <p> <figure className="functionImage"><img src={returnImage} alt="functions"></img></figure></p>
     <p>
      You can first return a value within the function, and then either parse it through a parser or the console.  
     </p>
      </p>
      <p>
      How do you accept a value in a function? While a function itself can be a value, think about constant values. 
      You can add a constant either globally or locally, and then assign it a value such as in this image: 
        </p>
        <p><figure className="functionImage"><img src={functionsImage4} alt="functions"></img></figure></p>
        <p>
      The value assigned to a constant in this example has the keyword of numbers, which creates an array of numbers. We 
      then pass the array into the console. 
     </p>
     <p>So what about callbacks? Remember how we talked about arguments before? Callbacks come in handy when 
       we want to display more than one function result. We can display both functions right after one another, as we 
       call the second function as an argument within the first function parameter. Here is what I mean by this:  
     </p>
     <p><figure className="functionImage"><img src={callback1} alt="callback"></img></figure></p>
     <p>If you take a look at the last line of code in the image above, you can see it creates a callback as the 
       first function gets passed as an argument in the second function parameter. Callbacks become extremely 
       useful in asynchronous functions as they sync together to perform different tasks.   
     </p>
     <p>While we've explained functions and callbacks, we need to remember promises. What is a promise?</p>
     </div>






    );
 
  





    

  }



  







  
  export default FunctionsCallbacksPromises;
  