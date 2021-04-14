import React from 'react';


function About(props) {
    return (
        <div  className="component section">
             <h2>About Me go here</h2>
             <h6>This portfolio has been viewed {props.views} times</h6>
        </div>
    );
  }
  
  export default About;