import React from 'react'
import './css/BlogpostStyles.css'
import reactImage from './images/reactImage.PNG'



function ReactPost() {
    return (
     
     <div class="main-1" id="reactpost">
        <div className="EmptyTop"></div>
    <h1>React</h1>
     <p><figure className="reactImage"> <img src={reactImage} alt="React"></img></figure>
     What is React? React is a JavaScript library created by Jordan Walke while he was working for 
     Facebook. It is for creating a simple and fast user interface for large web applications. In  
     React, we use state. So what is state? State is the React hook that displays the current visual 
     status of a page. For example, a page could be in a "loading" state where it says "loading" before 
     any data displays on the page. React is super popular due to its simplicity for front-end user 
     interfaces.
      </p>
      <p>
    In React, we can express components as either functional components or class components. So what are their 
    differences? A functional component returns just JavaScript as a class component extends from the React framework 
    itself. So when should you use each one? If you want to display JavaScript functions to do something without any 
    React hooks then I would use a functional component. But if a developer needs a React hook such as state, which is  
    explained above, then it needs to be in a class base component. Components are a very simple way to organize data for 
    web applications. 
        </p>
        <p>
    What do we mean when we talk about JSX? What does it stand for? JSX stands for Javascript XML. JSX is very robust because 
    we still want to refer to our old friend of HTML in our code. JSX allows us to essentially write HTML inside our React code.  
    This becomes super handy when we need to call out HTML tags for our user interface layouts. What does it mean to 'lift state 
    up'? Consider writing a React page where you have multiple components on that page. Data can often conflict in this situation. 
    Lifting state up simply refers to connecting the parent component to its child component. We want our applications to run smoothly, 
    and this allows us to move forward without any hicups down the road. In conclusion, React.JS is a very powerful framework as it  
    allows us to organize and show our data with a lot of simplicity in mind.  
     </p>
     </div>
    );
  }
  
  export default ReactPost;
  