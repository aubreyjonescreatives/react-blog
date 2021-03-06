import React from 'react'
import './css/BlogpostStyles.css'
import promisesImage from './images/promisesImage.PNG'



function FunctionsCallbacksPromises() {
    return (

     <div class="main-1" id="functionscallbackspromises">
       <div className="EmptyTop"></div>
    <h1>Functions, Callbacks, and Promises</h1>
     <p><figure className="svelteImage"> <img src={promisesImage} alt="promises"></img></figure>
     How do you declare a function? You can declare a function by several different methods. It can depend upon 
     function name keyword location. For example, one function can begin with the the syntax: function functionName() 
     and another example can begin with: functionName = function(). The syntax is so similar. So how are they different?
     Let's add a parser to both examples. The first example would pass the parser functionName() first, while the second 
     method would accept the parser functionName() last. This would effect response times for the program to accept 
     functions. A third style to declaring a function adds parameters to its functions. Function parameters belong inside 
     the first set of parenthesis after the function name. For example, they look like this: 
     function functionName(parameter1, parameter2). Function parameters alter the function's process, as it has to 
     take a look at the parameters throughout the function. 
     <p>If you want to return a value of a function, you'll have to first define either variables or parameters. You can 
       return a function within a function by simply stating the syntax: return: var. This allows functions to 
       process requests. A return request can have the syntax such as return: x + y.   
     </p>
     <p>
       To accept a value into a function, let's first explain what a value is. 
     </p>
      </p>
      <p>
      So how can we fix this? Should we forget about frameworks such as React? Harris goes on to say, "Frameworks are 
      not tools for organizing your code. They are tools for organizing your mind...compilers are the new framework." 
      Harris therefore created a solution call Svelte. He continues, "It takes your declarative components and then 
      it turns it into imperative efficient low level code that manipulates the DOM directly." Old Svelte is a lot like 
      old React when it comes to this.set and this.get. But unfortunately as soon as we introduce .this to both sets of 
      frameworks, the code connects to all sorts of constraints. Harris created a solution to this (pun intended) as he 
      found out he could input .change instead of .this. in Svelte, because Svelte is a compiler.   
        </p>
        <p>
       As Harris takes React and Vue projects and shows how Svelte improves them, speed, is one of his results. While it 
       is fun to showcase Svelte perks, the user experience is most important overall. So how can Svelte accomplish both? 
       Concurrent React synchronus callbacks only update information when a user stops typing. Svelte synchronus callbacks 
       update information while a user types. The best user experience presents efficiency. And speed equals efficiency. 
       It becomes quite clear that Svelte introduces the best user experience as opposed to React and Vue.  
     </p>
     </div>
    );
  }
  
  export default FunctionsCallbacksPromises;
  