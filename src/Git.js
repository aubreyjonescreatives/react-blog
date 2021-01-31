import React from 'react'
import './css/BlogpostStyles.css'
import GitImage from './images/gitimage.PNG'



function Git() {
    return (
     
     <div class="main-1" id="git">
    <h1>GIT</h1>
     <p><figure className="gitImage"> <img src={GitImage} alt="Aubrey Jones About Me"></img></figure>
      When you think about Git, what comes to your mind? Is it a filing system? A version control? In web development, 
      Git is both! It is crucial to organization, especially when working in a team. It is important to keep track of all of the team's 
      command lines, and Git essentially does this for them. It allows us as developers to keep track of coding changes 
      throughout the project and revert back to a place in the timeline if needed. It becomes extremely useful for these 
      reasons. 

      </p>
      <p>
      What is GitHub? 
      What problems does it solve?
      I could go on for hours on end about how many computers I have lost due to unfortunate circumstances. I have so many projects, and hate 
      the very thought of losing all of that data and time. GitHub is a perfect place to store any project in the cloud as I transfer my data to 
      other servers that store information globally. It is easy to use and update. Github also allows me to visually see all of my 
      updates and changes throughout my coding projects. It is also extremly useful 
      when it comes to working in a team as you can pull from other people's code in the same repository. Cloud storage and collaboration are very 
      effective when working on projects and using GitHub. 


        </p>
        <p>
      What is the difference betwee Git and Github? 

      It is easy for me to differentiate Git and Github when I think of them in terms of location. Git is a local filing system on my computer, and Github is a global 
      cloud storage system. Magic happens when they talk to each other, because Git can send commands to GitHub as a way to upload the local filing information into 
      a global server. This has helped me save so much information whenever my local machine gives way to unexpected circumstances. 


     </p>
     </div>
    );
  }
  
  export default Git;
  