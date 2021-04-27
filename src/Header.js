import React from "react";
import './Header.css';
import {Link} from "react-router-dom";
function Header(){
  
  return(
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto ">
        <ul className = "jog">
        <a><Link to="/Home">Home</Link></a>
        <a><Link to="/Feed">Feed</Link></a>
        <a><Link to="/Contact">Contact</Link></a>
        <a><Link to="/Login">Login</Link></a>
        <a><Link to ="/Signup">Signup</Link></a>
        </ul>
         
      </div>

    </div>
   
  </nav>
  
 
 
    
  </div>
    
);
   
}
export default Header;