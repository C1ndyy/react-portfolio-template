import React from 'react';
import NavBarItem from "./NavBarItem"


function Navbar(props) {
    return (
        <div  className="component" id="navbar">
            <NavBarItem name={'About'}></NavBarItem>
            <NavBarItem name={'Projects'}></NavBarItem>
            <NavBarItem name={'Contact Me'}></NavBarItem>
        </div>
    );
  }
  
  export default Navbar;