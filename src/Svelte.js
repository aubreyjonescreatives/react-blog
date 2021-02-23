import React from 'react'
import './css/BlogpostStyles.css'
import npmImage from './images/npmImage.PNG'



function Svelte() {
    return (

     <div class="main-1" id="svelte">
       <div className="EmptyTop"></div>
    <h1>Svelte</h1>
     <p><figure className="svelteImage"> <img src={npmImage} alt="Svelte"></img></figure>
      It is interesting how React.js becomes problematic while working with the virtual DOM libraries. 
      Instead of executing a simple math problem of 1 + 1 and committing it to memory, it has to  
      repeat all of the steps every single time a computer activates its code. Rich Harris in his 
      You Gotta Love Frontend Code Camp 2019 conference talk called Rethinking Reactivity goes into detail about this. 
      He says React is therefore not reactive and a poor title for the programming language. 
      This can become problematic with certain types of development needs.  
      </p>
      <p>
      So how can we fix this? Should we forget about frameworks such as React? Harris goes on to say, "Frameworks are 
      not tools for organizing your code. They are tools for organizing your mind...compilers are the new framework." 
      Harris therefore created a solution call Svelte. He continues, "It takes your declarative components and then 
      it turns it into imperative efficient low level code that manipulates the DOM directly." Old Svelte is a lot like 
      old React when it comes to this.set and this.get. But unfortunately as soon as we introduce this to both sets of 
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
  
  export default Svelte;
  