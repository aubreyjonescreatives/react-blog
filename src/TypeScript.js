import React from 'react'
import './css/BlogpostStyles.css'
import typeScriptImage from './images/typescript.PNG'



function TypeScript() {
    return (

     <div class="main-1" id="typescript">
       <div className="EmptyTop"></div>
    <h1>TYPESCRIPT</h1>
     <p><figure className="tsImage"> <img src={typeScriptImage} alt="TypeScript"></img></figure>
     What comes to mind when you think about the TypeScript programming language? JavaScript? If you read up on the 
     typescriptlang.org website, it states, "TypeScript is an open-source language which builds on JavaScript, one of 
     the world's most used tools, by adding static type definitions." So what does that mean? I like to think that TypeScript 
     is JavaScript (JS) on steroids. TypeScript adds extra features to JavaScript. If a JS project for a company becomes too large, 
     TypeScript is a great way to control and create large applications. 
      </p>
      <p>
     So how does TypeScript help developers? Why do we need it in addition to JavaScript? As mentioned above, it has several robust 
     features compared to JavaScript, which is helpful for larger applications. Developers do not want a massive list of bugs in large 
     applications. TypeScript is easy to read and detects errors early on, which assists developers as they debug the code. TypeScript is an 
     Object oriented programming language as opposed to JavaScript, which is a scripting language. It is like English versus Latin. TypeScript 
     is the English addition to JavaScript Latin. It is worth considering, as it organizes and cleans up JavaScript as developers write 
     programs. 

        </p>
        <p>
    What is the difference between compilation and transpilation? Do we use them in web development? 
    Compilation is a word used to describe the translation of one written code into another language. 
    It encompasses all translation. Transpilers on the other hand are source-to-source compilers. 
    In other words, they are individual snippets of code that get translated within a compilation. 
    They are essential to TypeScript as we translate it to JavaScript in our larger applications.    
     </p>
     </div>
    );
  }
  
  export default TypeScript;
  