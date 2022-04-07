import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div className="">
                <ul className="right">
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>  
    )
}

export default Navbar;