import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters, onBackground }) => {
  console.log("NavBar - Rendered");
  
  return ( 
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span style={{fontSize: "22px"}}>NavBar{" "}</span>
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
      <button className="btn badge-pill" style={{
        backgroundColor: "#444", 
        color: "white"
      }} onClick={() => onBackground()}>
        Set Background
      </button>
    </nav>
  ); 
}
 
export default NavBar;
