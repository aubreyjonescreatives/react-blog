import React from 'react'
import './css/BlogpostStyles.css'
import npmImage from './images/npmImage.PNG'



function npm() {
    return (

     <div class="main-1" id="npm">
       <div className="EmptyTop"></div>
    <h1>NPM</h1>
     <p><figure className="npmImage"> <img src={npmImage} alt="NPM"></img></figure>
     What is NPM? It is an acronym that stands for node package management. It is a command-line utility that 
     allows developers to add javascript code from other developers to their projects. Think about 
     a coding project as a book. We want to publish this book and have it available in bookstores. 
     NPM is a very sought out bookstore that contains a lot of books from other developers.
    It is also an online repository that allows us to save our coding projects in a cloud system. 
      So what benefits does NPM provide? It first and foremost saves us a lot of time. We want our code 
      to look and act like the popular kid at school. But it needs a lot of help with getting straight As and gaining 
      new talents. NPM is essentially the group of cliche popular athletic straight A students 
      that are more than willing to share their talents with others. 
      </p>
      <p>
      We often talk about NPM packages as the P in the acronym stands for package. But what is a NPM module? 
      You don't need to look any further from that very word, package, as each NPM package is a NPM module. They contain 
      JavaScript code from third-party developers as a way to save a lot of time.  


        </p>
        <p>
        What are the 3 components of NPM? They include: a third-party package management tool, 
        a command-line interface, and a public database for JavaScript. These are important because 
        they help beautify, organize, and clean up our code. We no longer have to build anything 
        entirely from scratch. We can collaborate with others to build beautiful projects in a very 
        timely manner.  
          
     </p>
     </div>
    );
  }
  
  export default npm;
  