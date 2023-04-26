import React from 'react';
import './NavBar.css';


import {Link} from "react-router-dom";

function NavBar(props) {
  return (
    <div className='row'>
        <nav>
            
            <header className="Head"> 
            <div className="col">
       
        <div>
        <button className='log'><Link className='log' to='/Login'>Login</Link></button>
        <button className='reg'><Link className='reg' to='/Registration'>Registration</Link> </button>
        <button className='hom'><Link className='hom' to='/Home'>Home</Link> </button>
        </div>
        </div>
        </header>
        </nav>
        
    </div>
  );
}

export default NavBar;