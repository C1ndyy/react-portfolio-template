import React from 'react';


function NavBarItem(props) {
    return (
        <div  className="component" >
          <a >{props.name}</a>
        </div>
    );
  }
  
  export default NavBarItem;