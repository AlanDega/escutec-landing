import React from 'react';
import './App.css'
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color:  'white'
  };
  return (
   <nav className="navStyle">
       <h3>Logo</h3>
       <ul className="nav-links">
         <li>Contacto</li>
         <li>Aplicaciones</li>
           
       </ul>
   </nav>
  );
} 

export default Nav;
